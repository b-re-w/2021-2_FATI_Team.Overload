#!/usr/bin/python3
# -*- coding: utf-8 -*-
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''
### Alias : FATI.Main.py & Last Modded : 2021.08.31. ###
Zumi Library Reference : https://learn.robolink.com/docs/zumi-library
FATI 대회 공지 : https://sites.google.com/view/2021fati/%ED%8F%89%EA%B0%80-%EB%B0%A9%EC%8B%9D

2021 FATI 평가 방식
-0점부터 동작별 가산 점수를 부여함. 총점: +200점(보너스 +30점 미포함)
-출발점에 Zumi를 놓고 QR 및 색상카드를 인식하여 올바른 경로를 주행하도록 진행
-각 A, B, C 파트 별 점수를 내어 합산 후 총점이 높은 순으로 평가.
-총점 : 200점 (A코스: 80점, B코스: 50점, C코스: 70점)
-보너스 : 30점
-최대 획득 가능 점수 : 230점

보너스 점수
-구현 시 코스별 구현을 통해 실제 주행시
*A course - 잠시 정지- B course - 잠시 정지 - C course가 가능하지만
 전체 트랙을 코스 구분 없이 한번에 코딩한 경우 보너스 부여: +20점
-재배치 없이 한번에 완주 시 보너스 부여: +10점
-경로 이탈시마다 5점의 감점을 부여하며 재배치를 진행함.

동점자 처리 기준 (총점이 같은 경우) :
-저학년일수록
-빨리 도착점에 들어왔을수록 높은 순위를 부여함.
(시간 측정 방법: 출발 시 도레미음이 끝나자마자 측정이 시작되며, 마지막 도착지점에 들어가는 순간 측정이 종료됩니다. 따라서 웃거나 춤을 추는 시간은 측정되지 않습니다.)
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''


import sys
import time
from collections import Counter

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
            self.demo_name = ["", "Parking_150_8444", "All_400_8444"]
        else:
            self.demo_name = demo_name
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
            self.zumi.stop()
        except Exception:
            pass
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

    def color_detector(self, knn, len=5, unity=True):
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
            self.screen.draw_text_center("%d -> turn " % (resolved) + result)
            try:
                self.camera.show_image(image)
                self.camera.clear_output()
            finally:
                return result
        return None

    def print_face(self):
        self.screen.draw_image_by_name("zumi_face_by_overload")

    def trace_line(self, threshold=[95, 30], turnspd=[5, 0], forwardspd=7, motordiff=13,
                   stopcount=15, turndir="Stop", frontsensor=0, duration=0):
        """ do not run this method with threading/thread/multiprocessing
            motordiff cannot be negative
            turndir == "Stop" -> stop when both white
            turndir == "Left" -> turn left when both white
            turndir == "Right" -> turn right when both white
            turndir == "None" -> go forward when both white and find both black site
            frontsensor mode 0 -> disable front sensor
            frontsensor mode 1 -> stop zumi when object detected
            frontsensor mode 2 -> reverse zumi when object detected (and restore when object is no longer detected)
            duration == 0 -> do not check elapsed time
            duration > 0 -> if elapsed > duration then stop
        """
        get_data = self.zumi.get_all_IR_data
        ctrl_motors = self.zumi.control_motors

        def set_motors(left, right):
            ctrl_motors(right, left)

        stopline_detected = 0
        obstacle_detected = False

        motordiff = abs(motordiff)
        #drive_mode = 0

        start = time.time()

        try:
            while True:
                front_r, bottom_r, _, bottom_l, _, front_l = get_data()
                print(bottom_l, bottom_r, "|", front_l, front_r)

                if duration and duration <= time.time()-start:
                    print("time out")
                    raise KeyboardInterrupt

                if frontsensor and (front_l < threshold[1] and front_r < threshold[1]) if not obstacle_detected else \
                                   (front_l > threshold[1] or front_r > threshold[1]):  # val > thresh : nothing detected
                    if frontsensor == 1:
                        print("obstacle detected")
                        raise KeyboardInterrupt
                    elif frontsensor == 2:
                        turnspd[0] *= -1
                        turnspd[1] *= -1
                        forwardspd *= -1
                        obstacle_detected = not obstacle_detected
                        print("obstacle detected" if obstacle_detected else "obstacle removed")

                forwardspd_l = forwardspd+abs(motordiff)*(1 if forwardspd > 0 else -1 if forwardspd < 0 else 0)
                turnspd_l = [turnspd[0]+abs(motordiff)*(1 if turnspd[0] > 0 else -1 if turnspd[0] < 0 else 0),
                             turnspd[1]+abs(motordiff)*(1 if turnspd[1] > 0 else -1 if turnspd[1] < 0 else 0)]
                if bottom_l >= threshold[0] and bottom_r >= threshold[0]:  # both black
                    #if drive_mode != 1:
                    set_motors(forwardspd_l, forwardspd)
                    #    drive_mode = 1
                    print("> go forward")
                    if stopline_detected and turndir == "None":
                        raise KeyboardInterrupt
                    else:
                        stopline_detected = 0
                elif bottom_l < threshold[0] and bottom_r >= threshold[0]:  # left white
                    #if drive_mode != 2:
                    set_motors(turnspd_l[0], turnspd[1])  # turn right
                    #    drive_mode = 2
                    print("> turn right")
                    if stopline_detected and turndir != "None":
                        stopline_detected = 0
                elif bottom_l >= threshold[0] and bottom_r < threshold[0]:  # right white
                    #if drive_mode != 3:
                    set_motors(turnspd_l[1], turnspd[0])  # turn left
                    #    drive_mode = 3
                    print("> turn left")
                    if stopline_detected and turndir != "None":
                        stopline_detected = 0
                else:  # both white
                    stopline_detected += 1
                    print(">> stopline_detected")
                    if stopline_detected >= stopcount // (forwardspd+1//2):
                        if turndir == "Left":
                            #if drive_mode != 4:
                            set_motors(turnspd_l[1], turnspd[0])  # turn left
                            #    drive_mode = 4
                            print("> stopline_detected && turn left")
                        elif turndir == "Right":
                            #if drive_mode != 5:
                            set_motors(turnspd_l[0], turnspd[1])  # turn right
                            #    drive_mode = 5
                            print("> stopline_detected && turn right")
                        elif turndir == "None":
                            #if drive_mode != 6:
                            set_motors(turnspd_l[0], turnspd[0])
                            #    drive_mode = 6
                            print("> stopline_detected && go forward")
                        else:
                            raise KeyboardInterrupt
        except KeyboardInterrupt:
            self.zumi.stop()
            print("-- a stop sign found --")

    def trace_line_PID(self, threshold=100, turnspd=5, forwardspd=10, stopsign=15, turndir="Stop", frontsensor=0):
        """ do not run this method with threading/thread/multiprocessing
            turndir == "Stop" -> stop when both white
            turndir == "Left" -> turn left when both white
            turndir == "Right" -> turn right when both white
            turndir == "None" -> go forward when both white
            frontsensor mode 0 -> disable front sensor
            frontsensor mode 1 -> stop zumi when object detected
            frontsensor mode 2 -> reverse zumi when object detected (and restore when object is no longer detected)
        """
        get_data = self.zumi.get_all_IR_data
        drive = self.zumi.drive_at_angle
        read_z = self.zumi.read_z_angle

        stopline_detected = 0
        obstacle_detected = False
        drive_mode = -1

        # PID Values
        k_p = self.zumi.D_P
        k_i = self.zumi.D_I
        k_d = self.zumi.D_D
        self.zumi.reset_PID()

        max_speed = 127
        accuracy = 1.0

        try:
            while True:
                front_r, bottom_r, _, bottom_l, _, front_l = get_data()
                print(bottom_l, bottom_r, "|", front_l, front_r)

                if frontsensor and (front_l > threshold or front_r > threshold) if not obstacle_detected else \
                                   (front_l < threshold and front_r < threshold):
                    if frontsensor == 1:
                        raise KeyboardInterrupt
                    elif frontsensor == 2:
                        turnspd *= -1
                        forwardspd *= -1
                        obstacle_detected = not obstacle_detected

                if bottom_l > threshold and bottom_r > threshold:  # both black
                    if drive_mode != 0:
                        drive(max_speed, forwardspd, read_z(), k_p, k_d, k_i, accuracy)
                        drive_mode = 0
                        print("> go forward")
                    if stopline_detected:
                        raise KeyboardInterrupt
                elif bottom_l < threshold and bottom_r > threshold:  # left white
                    if drive_mode != 1:
                        drive(turnspd, 0, read_z()-5, k_p, k_d, k_i, accuracy)
                        drive_mode = 1
                        print("> turn right")
                    if stopline_detected:
                        stopline_detected = 0
                elif bottom_l > threshold and bottom_r < threshold:  # right white
                    if drive_mode != 2:
                        drive(turnspd, 0, read_z()+5, k_p, k_d, k_i, accuracy)
                        drive_mode = 2
                        print("> turn left")
                    if stopline_detected:
                        stopline_detected = 0
                else:  # both white
                    stopline_detected += 1
                    print(">> stopline_detected")
                    if stopline_detected >= stopsign // ((forwardspd+1)//2):
                        stopline_detected = 0
                        if turndir == "Left":
                            if drive_mode != 3:
                                drive(turnspd, 0, read_z()+5, k_p, k_d, k_i, accuracy)
                                drive_mode = 3
                                print("> stopline_detected && turn left")
                        elif turndir == "Right":
                            if drive_mode != 4:
                                drive(turnspd, 0, read_z()-5, k_p, k_d, k_i, accuracy)
                                drive_mode = 4
                                print("> stopline_detected && turn right")
                        elif turndir == "None":
                            if drive_mode != 5:
                                drive(max_speed, turnspd, read_z(), k_p, k_d, k_i, accuracy)
                                drive_mode = 5
                                print("> stopline_detected && go forward")
                        else:
                            raise KeyboardInterrupt
        except KeyboardInterrupt:
            self.zumi.stop()
            print("-- a stop sign found --")

    def turn_to_dir(self, threshold=95, desired_angle=90, speed=[5, -5], motordiff=13, trust_line=True):
        """ desired_angle > 0 -> turn left
            desired_angle < 0 -> turn right
        """
        get_data = self.zumi.get_all_IR_data
        ctrl_motors = self.zumi.control_motors
        read_z = self.zumi.read_z_angle

        def set_motors(left, right):
            ctrl_motors(right, left)

        speed_l = [speed[0]+abs(motordiff)*(1 if speed[0] > 0 else -1 if speed[0] < 0 else 0),
                   speed[1]+abs(motordiff)*(1 if speed[1] > 0 else -1 if speed[1] < 0 else 0)]

        before = read_z()

        if desired_angle > 0:
            set_motors(speed_l[1], speed[0])  # turn left
            print("> turn left")
        elif desired_angle < 0:
            set_motors(speed_l[0], speed[1])  # turn right
            print("> turn right")
        else:
            print("> not move")

        try:
            while True:
                if trust_line:
                    _, bottom_r, _, bottom_l, _, _ = get_data()
                    print(bottom_l, bottom_r)

                gap = ((before+desired_angle)-read_z()) * (-1 if desired_angle < 0 else 1)
                if trust_line and 0 < gap < 10:
                    if bottom_l >= threshold and bottom_r >= threshold:
                        break
                elif gap <= 0:
                    if not trust_line or bottom_l >= threshold or bottom_r >= threshold:
                        break
            print("-- result : %d -> %d --" % (before, read_z()))
        except KeyboardInterrupt:
            print("-- a stop sign found --")
        finally:
            self.zumi.stop()

    def run_courseA(self, reverse_on=False, trust_line=True, senario=False,
                    forwardspd=4, turnspd=[2, 0], motordiff=13):
        """ 색상 카드를 읽어 해당 색상에 맞는 주차공간을 찾아 주차 (주차공간의 전면에 색상카드가 세워질 예정 - 전면카메라를 이용한 색깔 인식): 최대 +80점
            출발 직전 도 레 미 음성 출력 후 출발: +10점
            색깔 인식 후 Zumi 화면에 해당 색상 표시: +20점
            알맞은 주차 공간에 들어갔을 경우 (주차 시간은 1초로 특정함) : +20점
            들어간 주차 공간에서 무사히 빠져나왔을 경우: +30점
            목표 주차 공간을 제외한 다른 주차 공간 진입시 점수 없음
        """
        self.screen.draw_text_center("- course A -")

        # before the zumi start
        self.trace_line(forwardspd=1, turnspd=[1, 0], turndir="None")
        self.play_DoReMi()
        result = self.color_detector(self.knn_parking)
        order = ["Orange", "Yellow", "Blue"]

        # for loop until zumi ever parked
        found = False
        for i, dir in enumerate([-80, 80, -80]):
            # go until the stop line
            if trust_line:
                self.trace_line(turndir="None", forwardspd=forwardspd, turnspd=turnspd, motordiff=motordiff)
            else:
                self.trace_line(forwardspd=forwardspd, turnspd=turnspd, motordiff=motordiff)
                # go a little bit more
                self.zumi.forward(speed=10, duration=0.3)

            if senario and result != order[i]:
                continue

            if not found:
                # turn to direction
                self.turn_to_dir(desired_angle=dir, speed=[1, -1])

                if senario or self.color_detector(self.knn_parking) == result:
                    # park
                    self.trace_line()
                    time.sleep(1)

                    # pull out
                    if reverse_on:
                        self.zumi.reverse(speed=10, duration=0.5)
                        self.trace_line(forwardspd=-10, turnspd=[-5, 1])
                    else:
                        self.turn_to_dir(desired_angle=dir*2, speed=[1, -1])
                        self.trace_line()
                        # go a little bit more
                        self.zumi.forward(speed=10, duration=0.3)
                    found = True

                # turn to direction
                self.turn_to_dir(desired_angle=dir * (-1 if reverse_on or not found else 1))

    def run_courseB(self, turnspd=[2, 0], forwardspd=2, motordiff=0):
        """ 빨강색 Color Card 를 이용해 B course 시작지점에 정차했다가 카드를 치우면 남은 B course를 올바르게 주행하는지: 최대 +50점
            빨간색 카드를 제대로 인식하고 정지하는지: 각 +15점 (빨간색 카드는 총 2회 등장함: 총 +30점)
            초록색 카드를 제대로 인식하고 빨간색 카드가 없을 때 올바르게 주행하는지: +20점
            힌트: 앞에 장애물이 있을때 색깔 카드를 인식하도록 하면 더욱 좋은 정확도를 가질수 있음
        """
        self.screen.draw_text_center("- course B -")

        # go forward
        self.trace_line(forwardspd=4, turndir="None")

        # detect red light
        while self.color_detector(self.knn_trafficlight) != "Red":
            pass
        print("red light is detected")
        while self.color_detector(self.knn_trafficlight, len=3) == "Red":
            pass
        print("red light was removed")

        # go until the stop line
        self.trace_line(turnspd=turnspd, forwardspd=forwardspd, turndir="None", motordiff=motordiff)

    def run_courseC(self, backandforth=0, threshold=[40, 110]):
        """ 신호등의 색상이 초록색으로 바뀌면 QR코드를 인식하고 QR코드 문제를 올바르게 해결하여 적절한 도착지점에 도착: 최대 +70점
            QR코드 지점까지 올바르게 라인트레이싱: +10점
            QR코드의 message를 올바르게 인식: +10점
            message속의 수식을 eval을 이용하여 정답을 구한 뒤 Zumi에 정답을 띄울시: +10점
            정답을 활용하여 올바른 종료지점에 도착: +20점
            (단 최종 도착지점은 QR문제 별로 다를것, 단순히 방향으로 도착지점에 도착하는 경우를 방지하기 위함)
            모든 주행 종료 후 주미의 표정이 웃고있는것: +10점
            모든 주행 종료 후 주미가 춤을 추기: +10점
            (표정은 자신이 만든 간단히 웃는 표정을 만들어야합니다. 눈만 있으면 인정, personality 라이브러리 사용 금지, screen 라이브러리 허용)
            (춤의 예 : 간단하게 Zumi가 5바퀴를 회전. )
        """
        self.screen.draw_text_center("- course C -")

        # detect red light
        while self.color_detector(self.knn_trafficlight, len=3) != "Red":
            pass

        # detect green light
        while self.color_detector(self.knn_trafficlight, len=3) != "Green":
            pass

        # go until the stop line
        self.trace_line(turndir="None", forwardspd=4, turnspd=[2, 0], motordiff=6)

        # detect QR
        result = None
        reversed = 0
        while True:
            result = self.qr_detector()
            if result is not None:
                if reversed:
                    self.zumi.forward(speed=10, duration=reversed)
                break
            elif backandforth:  # maybe not working
                #self.trace_line(frontsensor=2, duration=1)
                if not reversed:
                    self.zumi.reverse(speed=10, duration=backandforth)
                    reversed = backandforth
                else:
                    self.zumi.forward(speed=10, duration=1)
                    reversed = 1 if reversed == 2 else 0

        # go until jumi reaches the junction
        self.trace_line(duration=1)

        # turn
        self.turn_to_dir(desired_angle=90 if 'L' in result else -90)

        # end
        self.trace_line(frontsensor=1, forwardspd=4, turnspd=[2, 0],
                        turndir="Right" if 'L' in result else "Left", threshold=threshold)
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
