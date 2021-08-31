# -*- coding: utf-8 -*-
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''
### Alias : FATI.Main.py & Last Modded : 2021.08.31. ###
Zumi Library Reference : https://learn.robolink.com/docs/zumi-library

2021 FATI 평가 방식
-감점 요소 없이 0점부터 동작별 가산 점수를 부여함.
-출발점에 Zumi를 놓고 QR 및 색상카드를 인식하여 올바른 경로를 주행하도록 진행
-전체 동작시간 측정 - 추후 완주를 기준으로 측정시간대별 순위 부여
-시간 측정은 출발 시 도레미음이 끝나자마자 측정이 시작되며
-측정 종료는 마지막 도착지점에 들어가는 순간 종료됩니다.
-(따라서 춤을 추거나 하는 시간은 포함되지 않습니다.)

동점자 처리 기준 (총점이 같은 경우) :
-저학년일수록
-빨리 도착점에 들어왔을수록 높은 순위를 부여함.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''


import sys
import time
from collections import Counter
from multiprocessing import Process

from zumi.zumi import Zumi
from zumi.protocol import Note  # to play sounds
from zumi.util.camera import Camera
from zumi.util.vision import Vision  # to recognize qr code
from zumi.util.screen import Screen
from zumi.util.color_classifier import ColorClassifier


class TeamOverload(object):
    def __init__(self, demo_name=None):
        self.camera = Camera()
        self.vision = Vision()
        self.screen = Screen()
        self.zumi = Zumi()

        if demo_name is None:
            self.demo_name = ["", "Parking_60_7381", "M2_7381"]
        else:
            print("demo_name argument " + self.demo_name + "detected!\n")
        self.knn_parking = ColorClassifier(demo_name=self.demo_name[1], user_name="Overload")
        self.knn_trafficlight = ColorClassifier(demo_name=self.demo_name[2], user_name="Overload")
        self.knn_parking.fit("hsv")
        self.knn_trafficlight.fit("hsv")

        self.camera.start_camera()
        self.screen.draw_text_center("Team.Overload")

    def __del__(self):
        try:
            self.camera.close()
        except Exception:
            pass
        self.zumi.stop()
        print("------------- zumi stopped")

    def play_DoReMi(self):
        """play Do-Re-Mi"""
        self.zumi.play_note(Note.C4)
        self.zumi.play_note(Note.D4)
        self.zumi.play_note(Note.E4)

    def play_NextLevel(self, tempo=420):
        """play aespa NextLevel"""
        [self.zumi.play_note(n[0], n[1]*tempo) for n in [
            (Note.CS4, 0.5), (Note.FS4, 0.75), (Note.CS4, 1.75), (Note.FS4, 3),
            (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.E4, 1), (Note.FS4, 1),
            (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.E4, 1), (Note.FS4, 1),
            (Note.CS4, 0.5), (Note.FS4, 0.5), (Note.CS4, 0.5), (Note.FS4, 1),
            (Note.CS4, 0.5), (Note.FS4, 0.75), (Note.CS4, 1.75), (Note.FS4, 3),
            (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.E4, 1), (Note.FS4, 1),
            (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.E4, 0.5), (Note.FS4, 2.5),
            (Note.FS2, 1), (Note.FS3, 1.25), (Note.FS2, 0.25), (Note.FS3, 0.75), (Note.A2, 1.25), (Note.B2, 1.5),
            (Note.FS2, 1), (Note.FS3, 1.25), (Note.FS2, 0.25), (Note.FS3, 0.75), (Note.A2, 1.25), (Note.B2, 1.5),
            (Note.FS2, 1), (Note.FS3, 1.25), (Note.FS2, 0.25), (Note.FS3, 0.75), (Note.A2, 1.25), (Note.B2, 1.5),
            (Note.FS2, 1), (Note.FS3, 1.25), (Note.FS2, 0.25), (Note.FS3, 0.75), (Note.A2, 1.25), (Note.B2, 1.5),
            (Note.FS2, 1), (Note.FS3, 1.25), (Note.FS2, 0.25), (Note.FS3, 0.75), (Note.A2, 1.25), (Note.B2, 1.5),
            (Note.FS2, 1), (Note.FS3, 1.25), (Note.FS2, 0.25), (Note.FS3, 0.75), (Note.A2, 1.25), (Note.B2, 1.5),
            (Note.FS2, 1), (Note.FS3, 1.25), (Note.FS2, 0.25), (Note.FS3, 0.75), (Note.A2, 1.25), (Note.B2, 1.5),
            (Note.FS2, 1), (Note.FS3, 1.25), (Note.FS2, 0.25), (Note.FS3, 0.75), (Note.A2, 1.25), (Note.B2, 1.5)
        ]]

    def color_detector(self, knn, len=10, unity=True):
        retry = True
        while retry:
            predicts = []
            for i in range(1, len+1, 1):
                image = self.camera.capture()
                predicts.append(knn.predict(image))
                self.screen.draw_text_center("%d/%d" % (i, len))
            print(predicts)
            retry = False
            common = Counter(predicts).most_common()
            if unity:  # 유일성 보장
                for c in common[1:]:
                    if c[1] == common[0][1]:
                        print("unity of prediction cannot be guaranteed. retry!")
                        self.screen.draw_text_center("retry!!")
                        retry = True
            else:  # 동일한 빈도수의 값이 나온 경우 문제 발생.
                pass
            result = common[0][0]
        print("color_detector result : " + result)
        self.screen.draw_text_center(result + " detected")
        return result

    def qr_detector(self):
        image = self.camera.capture()
        qr_code = self.vision.find_QR_code(image)
        if qr_code is not None:
            message = self.vision.get_QR_message(qr_code)
            print("qr resolver input : " + message)
            resolved = eval(message)
            result = "Left" if resolved % 2 == 0 else "Right"
            print(">> eval(message) is %d, so turn %s" % (resolved, result))
            self.screen.draw_text_center("QR : turn " + result)
            try:
                self.camera.show_image(image)
                self.camera.clear_output()
            finally:
                return result
        return None

    def print_face(self):
        self.screen.draw_image_by_name("zumi_face_by_overload")

    def trace_line(self, threshold=100, turnspd=5, forwardspd=10, stopsign=15, turndir="Stop", turngap=90, frontsensor=0):
        """do not run this method with threading/thread, use multiprocessing
           turndir == "Stop" -> stop when both white
           turndir == "Left" -> turn left when both white
           turndir == "Right" -> turn right when both white
           turndir == "None" -> go forward when both white
           frontsensor mode 0 -> disable front sensor
           frontsensor mode 1 -> stop zumi when object detected
           frontsensor mode 2 -> reverse zumi when object detected (and restore when object is no longer detected)
        """
        get_data = self.zumi.get_all_IR_data
        read_z = self.zumi.read_z_angle

        stopline_detected = 0
        obstacle_detected = False
        drive_mode = 0

        watch_dog = None
        driver = None

        def watchdog(driver):
            def drive(mode, gap, reverse=False):
                duration = 10000
                desired_angle = read_z()
                go = self.zumi.forward if not reverse else self.zumi.reverse
                while True:
                    if mode == 1:
                        go(forwardspd, duration)
                    elif mode == 2 or mode == 4:  # turn right
                        self.zumi.turn(desired_angle-abs(gap), duration, turnspd)
                    elif mode == 3 or mode == 5:  # turn left
                        self.zumi.turn(desired_angle+abs(gap), duration, turnspd)
                    elif mode == 6:
                        go(turnspd, duration)
                    elif mode == 0:
                        self.zumi.stop()

            dvm = [None, None]  # [drive_mode, obstacle_detected]
            while True:
                if dvm[0] != drive_mode or dvm[1] != obstacle_detected:
                    try:
                        driver.terminate()
                        driver.join()
                        print("driver was terminated.")
                    except Exception:
                        pass
                    dvm = [drive_mode, obstacle_detected]
                    driver = Process(target=drive, args=(dvm[0], turngap, dvm[1]))
                    driver.start()
                    print("driver was started.")

        watch_dog = Process(target=watchdog, args=(driver, ))
        watch_dog.start()
        try:
            while True:
                front_r, bottom_r, _, bottom_l, _, front_l = get_data()
                print((front_r, bottom_r, bottom_l, front_l))

                if frontsensor and (front_l > threshold or front_r > threshold) if not obstacle_detected else \
                                   (front_l < threshold and front_r < threshold):
                    if frontsensor == 1:
                        raise KeyboardInterrupt
                    elif frontsensor == 2:
                        obstacle_detected = not obstacle_detected

                if bottom_l > threshold and bottom_r > threshold:  # both black
                    if drive_mode != 1:
                        drive_mode = 1
                        print("> go forward")
                    if stopline_detected:
                        raise KeyboardInterrupt
                elif bottom_l < threshold and bottom_r > threshold:  # left white
                    if drive_mode != 2:
                        drive_mode = 2
                        print("> turn right")
                    if stopline_detected:
                        stopline_detected = 0
                elif bottom_l > threshold and bottom_r < threshold:  # right white
                    if drive_mode != 3:
                        drive_mode = 3
                        print("> turn left")
                    if stopline_detected:
                        stopline_detected = 0
                else:  # both white
                    stopline_detected += 1
                    print(">> stopline_detected")
                    if stopline_detected >= stopsign // (forwardspd//2):
                        stopline_detected = 0
                        if turndir == "Left":
                            if drive_mode != 4:
                                drive_mode = 4
                                print("> stopline_detected && turn left")
                        elif turndir == "Right":
                            if drive_mode != 5:
                                drive_mode = 5
                                print("> stopline_detected && turn right")
                        elif turndir == "None":
                            if drive_mode != 6:
                                drive_mode = 6
                                print("> stopline_detected && go forward")
                        else:
                            raise KeyboardInterrupt
        except KeyboardInterrupt:
            watch_dog.terminate()
            watch_dog.join()
            try:
                driver.terminate()
                driver.join()
            except Exception:
                pass
            self.zumi.stop()
            print("-- a stop sign found --")

    def turn_while_linetracing(self, threshold=100, turnspd=5, turndir="Right", desired_angle="90"):
        """if desired_angle is not None, then turndir is reset automatically.
           desired_angle and turndir cannot be both None.
        """
        get_data = self.zumi.get_all_IR_data
        set_motors = self.zumi.control_motors
        read_z = self.zumi.read_z_angle

        if desired_angle is not None:
            turndir = "Left" if desired_angle < 0 else "Right"
            desired_angle += read_z()
            if desired_angle < -180:
                desired_angle = desired_angle % 180
            elif desired_angle > 180:
                desired_angle = desired_angle % -180
            elif desired_angle == -180:
                desired_angle *= -1

        if turndir is None:
            print("desired_angle and turndir cannot be both None.")
            raise ValueError

        try:
            while True:
                _, bottom_r, _, bottom_l, _, _ = get_data()

                if bottom_l > threshold and bottom_r > threshold and (desired_angle is None or
                   (desired_angle >= read_z() if "L" in turndir else desired_angle <= read_z())):
                    raise KeyboardInterrupt
                elif bottom_l < threshold and bottom_r > threshold:  # left black
                    set_motors(turnspd, 0, 0)  # turn left
                elif bottom_l > threshold and bottom_r < threshold:  # right black
                    set_motors(0, turnspd, 0)  # turn right
                else:  # both white
                    if turndir == "Left":
                        set_motors(turnspd, 0, 0)  # turn left
                    else:
                        set_motors(0, turnspd, 0)  # turn right
        except KeyboardInterrupt:
            self.zumi.stop()
            print("-- a stop sign found --")

    def run_courseA(self):
        """ 색상 카드를 읽어 해당 색상에 맞는 주차공간을 찾아 주차 (주차공간의 전면에 색상카드가 세워질 예정 - 전면카메라를 이용한 색깔 인식) - 00점
            출발 직전 도 레 미 음성 출력 후 출발 - 00점
            주차 - 00점(주차공간에 정확히 들어갔을경우, 주차선 이탈시 00점)
            주차 시간은 정지 2초이상 5초이하 - 00점 (너무 오래 멈춰있거나 너무 빨리움직이면 00점)
            목표 주차장을 제외한 다른 주차공간 통과시 각 00점
        """
        self.screen.draw_text_center("- course A -")

        # before the zumi start
        result = self.color_detector(self.knn_parking)
        self.play_DoReMi()

        def find_parkinglot(desired_angle):
            found = False

            # turn to direction
            self.turn_while_linetracing(desired_angle=desired_angle)

            if self.color_detector(self.knn_parking) == result:
                found = True

                # park
                start = time.time()
                self.trace_line(turndir="None", frontsensor=1)
                elapsed = time.time() - start
                time.sleep(3)

                # pull out
                tracer = Process(target=self.trace_line, args=(self, 100, -5, -7, 15, "None", 1))
                start = time.time()
                tracer.start()
                while elapsed >= time.time() - start:
                    pass
                tracer.terminate()
                self.zumi.stop()
                tracer.join()

            # turn to direction
            self.turn_while_linetracing(turnspd=-5, desired_angle=desired_angle*-1)
            return found

        while True:  # loop until zumi ever parked
            # go until the stop line
            self.trace_line(turndir="None")

            # turn right
            if find_parkinglot("90"):
                break
            else:  # turn left
                if find_parkinglot("-90"):
                    break

    def run_courseB(self):
        """ 빨강색 Color Card 를 이용해 B course 시작지점에 정차했다가 카드를 치우면 남은 B course를 올바르게 주행하는지. 00점
            빨강 카드를 제대로 인식하고 정지하는지 - 00점
            남은 구간에 대해 라인을 인식하고 올바른 주행시 - 00점(경로 이탈시마다 00점씩 감점)
        """
        self.screen.draw_text_center("- course B -")

        # detect red light
        tracer = Process(target=self.trace_line, args=(self, 100, 5, 7, 15, "None", 0))
        tracer.start()
        while self.color_detector(self.knn_trafficlight) != "Red":
            pass
        tracer.terminate()
        self.zumi.stop()
        tracer.join()

        # go until the stop line
        self.trace_line(turndir="None")

    def run_courseC(self, signalwait=10, scenario=False):
        """ 신호등의 색상이 초록색으로 바뀌면 마지막 코스 주행 이때 QR을 인식하여 종료지점이 달라지고 QR코드 문제를 올바르게 풀 수 있다면 적절한 도착지점에 도착.
            (문제가 틀린경우 오답 도착지점에 도착)
            신호등에서 빨간색일때 멈추고 초록색일때 출발 - 00점
            남은 구간에 대해 올바른 주행시 - 00점(경로 이탈시마다 5점씩 감점)
            최종도착을 할 수 있다 - 00점
            QR문제를 올바르게 인식하고 풀어 정답지점에 도착시 - 00점
            (단 최종 도착지점은 QR문제 별로 다를것, 단순히 방향으로 도착지점에 도착하는 경우를 방지하기 위함)
            QR문제 정답을 주미 전광판에 출력할 수 있다 - 00점
            마지막 주행 종료 후 주미의 표정이 웃고있으면서 춤을 추거나 노래를 부른다. - 00점
            (주의 표정은 자신이 만든 간단히 웃는 표정을 만들어야합니다. 눈, 입 만 있으면 인정, 기존 라이브러리 사용 불가)
            (춤의 예 : 간단하게 Zumi가 5바퀴를 회전.)
        """
        self.screen.draw_text_center("- course C -")

        # recognize traffic light
        if not scenario:  # 정해진 시나리오 없이 진행
            # recognize traffic light
            tracer = Process(target=self.trace_line, args=(self, 100, 5, 7, 15, "Left", 0))
            start_time = time.time()
            while time.time() - start_time <= signalwait:
                result = self.color_detector(self.knn_trafficlight)
                try:
                    if result == "Red":
                        tracer.terminate()
                        self.zumi.stop()
                        tracer.join()
                        tracer = Process(target=self.trace_line, args=(self, 100, 5, 7, 15, "Left", 0))
                    elif result == "Green":
                        tracer.start()
                except Exception:
                    pass
        else:  # 빨간 색 이후 초록 색 신호 시나리오
            # detect red light
            tracer = Process(target=self.trace_line, args=(self, 100, 5, 7, 15, "Left", 0))
            tracer.start()
            while self.color_detector(self.knn_trafficlight) != "Red":
                pass
            tracer.terminate()
            self.zumi.stop()
            tracer.join()

            # detect green light
            while self.color_detector(self.knn_trafficlight, 5) != "Green":
                pass

        # move during QR detecting
        tracer = Process(target=self.trace_line, args=(self, 100, 5, 7, 15, "Right", 2))
        tracer.start()
        result = self.qr_detector()
        tracer.terminate()
        self.zumi.stop()
        tracer.join()

        # go until jumi reaches the junction
        self.trace_line()

        # turn
        self.turn_while_linetracing(turndir=result)

        # end
        self.trace_line(turndir="None", frontsensor=1)
        self.print_face()
        self.play_NextLevel()


if __name__ == '__main__':
    # init
    fati = TeamOverload(sys.argv if len(sys.argv) == 3 else None)

    # course A
    fati.run_courseA()

    # course B
    fati.run_courseB()

    # course C
    fati.run_courseC()

    # quit
    del fati
