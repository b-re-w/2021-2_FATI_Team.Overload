# -*- coding: utf-8 -*-
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''
### Alias : FATI_Test.py & Last Modded : 2021.08.28. ###
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''


import sys
from FATI_Main import TeamOverload


if __name__ == '__main__':
    # init
    fati = TeamOverload(sys.argv if len(sys.argv) == 3 else None)

    print("------ Test Script Started ------")
    while True:
        try:
            exec(input())
        except KeyboardInterrupt:
            del fati
            print("------ Test Script Ended ------")
            exit(1)
        except Exception:
            continue
