# -*- coding: utf-8 -*-
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''
### Alias : FATI.Main.py & Last Modded : 2021.08.31. ###

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
from collections import Counter

from zumi.zumi import Zumi
from zumi.protocol import Note  # to play sounds
from zumi.util.camera import Camera
from zumi.util.screen import Screen
from zumi.util.color_classifier import ColorClassifier


class TeamOverload(object):
    def __init__(self, demo_name=None):
        self.camera = Camera()
        self.screen = Screen()
        self.zumi = Zumi()

        if demo_name is None:
            self.demo_name = "M2_7381"
        else:
            print("demo_name argument " + self.demo_name + "detected!\n")
        knn = ColorClassifier(demo_name=self.demo_name, user_name="Overload")
        knn.fit("hsv")
        self.camera.start_camera()
        self.screen.draw_text_center("Team.Overload")

    def __del__(self):
        self.camera.close()

    def play_DoReMi(self):
        """"play Do-Re-Mi"""
        self.zumi.play_note(Note.C4)
        self.zumi.play_note(Note.D4)
        self.zumi.play_note(Note.E4)

    def play_NextLevel(self):
        """"play aespa NextLevel"""
        tempo = 342
        song = [(Note.CS4, 1), (Note.FS4, 0.5), (Note.CS4, 3), (Note.FS4, 2),
                (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.E4, 1), (Note.FS4, 1),
                (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.E4, 1), (Note.FS4, 1),
                (Note.CS4, 0.5), (Note.FS4, 0.5), (Note.CS4, 0.5), (Note.FS4, 1),
                (Note.CS4, 1), (Note.FS4, 0.5), (Note.CS4, 3), (Note.FS4, 2),
                (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.E4, 1), (Note.FS4, 1),
                (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.FS4, 0.5), (Note.E4, 1), (Note.FS4, 1),
                (Note.FS2, 1), (Note.FS3, 1), (Note.FS2, 0.5), (Note.FS3, 0.5), (Note.A3, 1), (Note.B3, 1),
                (Note.FS2, 1), (Note.FS3, 1), (Note.FS2, 0.5), (Note.FS3, 0.5), (Note.A3, 1), (Note.B3, 1),
                (Note.FS2, 1), (Note.FS3, 1), (Note.FS2, 0.5), (Note.FS3, 0.5), (Note.A3, 1), (Note.B3, 1),
                (Note.FS2, 1), (Note.FS3, 1), (Note.FS2, 0.5), (Note.FS3, 0.5), (Note.A3, 1), (Note.B3, 1)
        ]
        for n in song:
            self.zumi.play_note(n[0], n[1])

    def color_detector(self, len=10, unity=True):
        retry = True
        while retry:
            predicts = []
            for i in range(1, len+1, 1):
                image = self.camera.capture()
                predicts.append(self.knn.predict(image))
                self.screen.draw_text_center(i + "/" + len)
            print(predicts)
            retry = False
            if unity:
                common = Counter(predicts).most_common()
                for c in common[1:]:
                    if c[1] == common[0][1]:
                        print("unity of prediction cannot be guaranteed. retry!")
                        self.screen.draw_text_center("retry!!")
                        retry = True
            else:  # 동일한 빈도수의 값이 나온 경우 문제 발생.
                result = Counter(predicts).most_common()[0][0]
        print("color_detector result : " + result)
        self.screen.draw_text_center(result, "detected")
        return result

    def print_face(self):
        self.screen.draw_image_by_name("happy_left1.ppm")

    def run_courseA(self):
        """ 색상 카드를 읽어 해당 색상에 맞는 주차공간을 찾아 주차 (주차공간의 전면에 색상카드가 세워질 예정 - 전면카메라를 이용한 색깔 인식) - 00점
            출발 직전 도 레 미 음성 출력 후 출발 - 00점
            주차 - 00점(주차공간에 정확히 들어갔을경우, 주차선 이탈시 00점)
            주차 시간은 정지 2초이상 5초이하 - 00점 (너무 오래 멈춰있거나 너무 빨리움직이면 00점)
            목표 주차장을 제외한 다른 주차공간 통과시 각 00점
        """
        # before the zumi start
        self.play_DoReMi()
        # move forward
        ##result = self.color_detector()

    def run_courseB(self):
        """ 빨강색 Color Card 를 이용해 B course 시작지점에 정차했다가 카드를 치우면 남은 B course를 올바르게 주행하는지. 00점
            빨강 카드를 제대로 인식하고 정지하는지 - 00점
            남은 구간에 대해 라인을 인식하고 올바른 주행시 - 00점( 경로 이탈시마다 00점씩 감점)
        """

    def run_courseC(self):
        """ 신호등의 색상이 초록색으로 바뀌면 마지막 코스 주행 이때 QR을 인식하여 종료지점이 달라지고 QR코드 문제를 올바르게 풀 수 있다면 적절한 도착지점에 도착.
            ( 문제가 틀린경우 오답 도착지점에 도착 )
            신호등에서 빨간색일때 멈추고 초록색일때 출발 - 00점
            남은 구간에 대해 올바른 주행시 - 00점( 경로 이탈시마다 5점씩 감점 )
            최종도착을 할 수 있다 - 00점
            QR문제를 올바르게 인식하고 풀어 정답지점에 도착시 - 00점
            (단 최종 도착지점은 QR문제 별로 다를것, 단순히 방향으로 도착지점에 도착하는 경우를 방지하기 위함)
            QR문제 정답을 주미 전광판에 출력할 수 있다 - 00점
            마지막 주행 종료 후 주미의 표정이 웃고있으면서 춤을 추거나 노래를 부른다. - 00점
            (주의 표정은 자신이 만든 간단히 웃는 표정을 만들어야합니다. 눈, 입 만 있으면 인정, 기존 라이브러리 사용 불가)
            (춤의 예 : 간단하게 Zumi가 5바퀴를 회전. )
        """

        # end
        ##self.print_face()
        self.play_NextLevel()


if __name__ == '__main__':
    # init
    fati = TeamOverload(sys.argv[1] if len(sys.argv) > 1 else None)

    # course A
    fati.run_courseA()

    # course B
    fati.run_courseB()

    # course C
    fati.run_courseC()

    # quit
    del fati
