/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
"use strict";

goog.provide("Blockly.Blocks.zumi"); // Deprecated
goog.provide("Blockly.Constants.Zumi");

goog.require("Blockly.Blocks");
goog.require("Blockly");

/**
 * Common HSV hue for all blocks in this category.
 * Should be the same as Blockly.Msg.TEXTS_HUE
 * @readonly
 */
Blockly.Constants.Zumi.HUE = "#3353da";
Blockly.Constants.Zumi.HUE_Orange2 = "#EC5B29";
Blockly.Constants.Zumi.HUE_Orange = "#f29327";
Blockly.Constants.Zumi.HUE_Violet = "#b358d7";
Blockly.Constants.Zumi.HUE_Rose = "#ee42ae";
Blockly.Constants.Zumi.HUE_Cian = "#3399e4";
Blockly.Constants.Zumi.HUE_driving = "#00B888";
Blockly.Constants.Zumi.HUE_shapes = "#3399E4";
Blockly.Constants.Zumi.HUE_screen = "#89D2E8";
Blockly.Constants.Zumi.HUE_sounds = "#EE43AE";
Blockly.Constants.Zumi.HUE_lights = "#945BD6";
Blockly.Constants.Zumi.HUE_flight_variables = "#33DAD8";
Blockly.Constants.Zumi.HUE_keyboard_input = "#CACACA";
Blockly.Constants.Zumi.HUE_timming = "#9B9B9B";
/** @deprecated Use Blockly.Constants.Text.HUE */
Blockly.Blocks.zumi.HUE = Blockly.Constants.Zumi.HUE;

Blockly.Blocks["zumi_turn_degree_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "turn %1 degrees",
      args0: [
        {
          type: "field_number",
          name: "NUM0",
          value: 0,
          min: -180,
          max: 180
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_turn_degree_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "turn_degree(%1º)",
      args0: [
        {
          type: "field_number",
          name: "NUM0",
          value: 0,
          min: -180,
          max: 180
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_turn_left_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "left()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_turn_right_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "right",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_turn_right_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "right()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_forward_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 forward",
      args0: [
        {
          type: "field_image",
          src: "images/icons/forward.svg",
          width: 25,
          height: 25,
          alt: "*"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_forward_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "forward()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_parallel_park_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 parallel park",
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: "field_image",
          src: "images/icons/parallel_park.svg",
          width: 25,
          height: 25,
          alt: "*"
        }
      ],
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_driving,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
}
  Blockly.Blocks["zumi_brake_junior"] = {
    init: function() {
      this.jsonInit({
        message0: "%1 brake",
        previousStatement: null,
        args0: [
          {
            type: "field_image",
            src: "images/icons/brake.svg",
            width: 25,
            height: 25,
            alt: "*"
          }
        ],
        nextStatement: null,
        tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
        colour: Blockly.Constants.Zumi.HUE_driving,
        helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
      });
    }
 };  

 Blockly.Blocks["zumi_reverse_seconds_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 reverse for %2 seconds",
      args0: [
        {
          type: "field_image",
          src: "images/icons/reverse.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_number",
          name: "NUM0",
          value: 0,
          min: 0
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_driving,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_turn_left_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 turn left %2°",
      args0: [
        {
          type: "field_image",
          src: "images/icons/left_turn.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_dropdown",
          name: "ANGLE",
          options: [
            ["30", "30"],
            ["45", "45"],
            ["60", "60"],
            ["90", "90"],
            ["120", "120"],
            ["135", "135"],
            ["150", "150"],
            ["180", "180"],
            ["360", "360"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE_driving,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_turn_right_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 turn right %2°",
      args0: [
        {
          type: "field_image",
          src: "images/icons/right_turn.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_dropdown",
          name: "ANGLE",
          options: [
            ["30", "30"],
            ["45", "45"],
            ["60", "60"],
            ["90", "90"],
            ["120", "120"],
            ["135", "135"],
            ["150", "150"],
            ["180", "180"],
            ["360", "360"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE_driving,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_left_u_turn_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 left U-turn with %2 speed",
      args0: [
        {
          type: "field_image",
          src: "images/icons/left_u.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_number",
          name: "NUM0",
          value: 0,
          min: 0
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_driving,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_right_u_turn_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 right U-turn with %2 speed",
      args0: [
        {
          type: "field_image",
          src: "images/icons/right_u.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_number",
          name: "NUM0",
          value: 0,
          min: 0
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_driving,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_circle_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 %2 circle",
      args0: [
        {
          type: "field_image",
          src: "images/icons/left_circle.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_dropdown",
          name: "CIRCLE",
          options: [
            ["left", "left"],
            ["right", "right"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE_shapes,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_triangle_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 %2 triangle",
      args0: [
        {
          type: "field_image",
          src: "images/icons/triangle.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_dropdown",
          name: "TRIANGLE",
          options: [
            ["left", "left"],
            ["right", "right"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour:Blockly.Constants.Zumi.HUE_shapes,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_square_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 %2 square",
      args0: [
        {
          type: "field_image",
          src: "images/icons/square.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_dropdown",
          name: "SQUARE",
          options: [
            ["left", "left"],
            ["right", "right"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE_shapes,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_rectangle_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 rectangle",
      args0: [
        {
          type: "field_image",
          src: "images/icons/rectangle.svg",
          width: 25,
          height: 25,
          alt: "*"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_shapes,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_figure_8_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 figure 8",
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: "field_image",
          src: "images/icons/figure_8.svg",
          width: 25,
          height: 25,
          alt: "*"
        }
      ],
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_shapes,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_j_turn_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 J-turn",
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: "field_image",
          src: "images/icons/j_turn.svg",
          width: 25,
          height: 25,
          alt: "*"
        }
      ],
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_shapes,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_draw_text_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "draw text %1",
      args0: [
        {
          type: "field_input",
          name: "TEXT",
          text: "message"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_screen,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};


Blockly.Blocks["zumi_sad_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "sad eyes",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_screen,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_angry_sound_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "angry",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_sounds,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_happy_sound_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "happy",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_sounds,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_blink_sound_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "blink",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_sounds,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};


Blockly.Blocks["zumi_celebrate_sound_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "celebrate",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_sounds,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_wake_up_sound_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "wake up",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_sounds,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_desoriented_sound_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "desoriented",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_sounds,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_oops_front_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "oops front",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_sounds,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_oops_back_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "oops back",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_sounds,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};


Blockly.Blocks["zumi_closed_eyes_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 closed eyes",
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: "field_image",
          src: "images/icons/closed_eyes.svg",
          width: 25,
          height: 25,
          alt: "*"
        }
      ],
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_screen,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};


Blockly.Blocks["zumi_sleepy_eyes_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "sleepy eyes",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_screen,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_happy_eyes_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "happy eyes",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_screen,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};


Blockly.Blocks["zumi_glimmer_eyes_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "glimmer eyes",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_screen,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_blinking_eyes_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "blinking eyes",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_screen,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};


Blockly.Blocks["zumi_angry_eyes_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "angry eyes",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_screen,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_open_eyes_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "open eyes",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_screen,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_forward_seconds_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 forward for %2 seconds",
      args0: [
        {
          type: "field_image",
          src: "images/icons/forward.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_number",
          name: "NUM0",
          value: 0,
          min: 0
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_driving,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_forward_duration_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "forward(%1 sec)",
      args0: [
        {
          type: "field_number",
          name: "NUM0",
          value: 0,
          min: 0
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["play_note_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "play %1 for %2 millisec",
      args0: [
        {
          type: "field_input",
          name: "TEXT",
          text: "note"
        },
        {
          type: "field_number",
          name: "SECONDS",
          value: 0,
          min: 10,
          max: 2500
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_sounds,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_reverse_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "reverse",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_reverse_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "reverse()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_jedi_drive_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "jedi drive",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_jedi_drive_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "jedi_drive()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_lights_on_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "lights on",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};
Blockly.Blocks["zumi_lights_on_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "turn_on()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_lights_off_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "lights off",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_headlights_on_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "headlights on",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_headlights_off_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "headlights off",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_brake_lights_on_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "brake lights on",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_brake_lights_off_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "brake lights off",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_hazard_lights_on_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "hazard lights on",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_hazard_lights_off_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "hazard lights off",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_signal_right_on_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "right signal on",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_signal_right_off_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "right signal off",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_signal_left_on_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "left signal on",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_signal_left_off_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "left signal off",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_lights,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_lights_off_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "turn_off()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_reverse_duration_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "reverse(%1 sec)",
      args0: [
        {
          type: "field_number",
          name: "NUM0",
          value: 0,
          min: 0
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_go_direction_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "go(%1)",
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            ["forward", "Direction.FORWARD"],
            ["backward", "Direction.BACKWARD"],
            ["left", "Direction.LEFT"],
            ["right", "Direction.RIGHT"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_stop_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "stop",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_stop_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "stop()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_camera_show_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "show",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};
Blockly.Blocks["zumi_camera_show_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "show()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_engine_set_speed_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "set speed %1",
      args0: [
        {
          type: "field_number",
          name: "NUM0",
          value: 20,
          min: 20,
          max: 100
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_engine_set_speed_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "set_speed(%1)",
      args0: [
        {
          type: "field_number",
          name: "NUM0",
          value: 20,
          min: 20,
          max: 100
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_get_distance_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "get distance from %1 side",
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            ["front", "Direction.FRONT"],
            ["back", "Direction.BACK"],
            ["left", "Direction.LEFT"],
            ["right", "Direction.RIGHT"]
          ]
        }
      ],
      output: "Number",
      colour: Blockly.Constants.Zumi.HUE_Orange,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_get_distance_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "get_distance(%1)",
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            ["front", "Direction.FRONT"],
            ["back", "Direction.BACK"],
            ["left", "Direction.LEFT"],
            ["right", "Direction.RIGHT"]
          ]
        }
      ],
      output: "Number",
      colour: Blockly.Constants.Zumi.HUE_Orange,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_play_sound_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "play sound",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_play_sound_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "play()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_personality_act_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "act %1",
      args0: [
        {
          type: "field_dropdown",
          name: "EMOTION",
          options: [
            ["happy", "Emotion.HAPPY"],
            ["sad", "Emotion.SAD"],
            ["excited", "Emotion.EXCITED"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_personality_act_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "act(%1)",
      args0: [
        {
          type: "field_dropdown",
          name: "EMOTION",
          options: [
            ["happy", "Emotion.HAPPY"],
            ["sad", "Sound.SAD"],
            ["scared", "Sound.SCARED"],
            ["excited", "Sound.EXCITED"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_face_detected_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "face detected",
      output: "Boolean",
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_face_detected_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "face_detected()",
      output: "Boolean",
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_track_face_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "track face",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_track_face_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "track_face()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_take_photo_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "take photo",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_take_photo_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "take_photo()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_smile_detected_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "smile detected",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_smile_detected_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "smile_detected()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_collect_smile_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "collect smile",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_collect_smile_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "collect_smile()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_wait_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%2 wait %1 seconds",
      args0: [
        {
          type: "field_number",
          name: "NUM0",
          value: 0
        },
        {
          type: "field_image",
          src: "images/icons/icon_wait.svg",
          width: 25,
          height: 25,
          alt: "*"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Codrone.HUE_timming,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_wait_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "%2 sleep(%1 sec)",
      args0: [
        {
          type: "field_number",
          name: "NUM0",
          value: 0
        },
        {
          type: "field_image",
          src: "images/icons/icon_wait.svg",
          width: 25,
          height: 25,
          alt: "*"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Codrone.HUE_timming,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_sleep_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "sleep",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_sleep_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "sleep()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_wakeup_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "wake up",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_wakeup_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "wake_up()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_blink_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "blink",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_blink_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "blink()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_excited_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "excited",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_excited_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "excited()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_look_left_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "look left",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_look_left_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "look_left()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_look_right_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "look right",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_look_right_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "look_right()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_sad_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "sad",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE_screen,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_sad_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "sad()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_hello_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "hello",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_hello_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "hello()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_glimmer_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "glimmer",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_glimmer_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "glimmer()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_happy_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "happy",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_happy_senior"] = {
  init: function() {
    this.jsonInit({
      message0: "happy()",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_get_ir_data_junior"] = {
  init: function() {
    this.jsonInit({
      type: "zumi_get_ir_data_junior",
      message0: "get IR reading %1",
      args0: [
        {
          "type": "field_dropdown",
          "name": "ir_data",
          "options": [
            [
              "front right",
              "0"
            ],
            [
              "bottom right",
              "1"
            ],
            [
              "back right",
              "2"
            ],
            [
              "bottom left",
              "3"
            ],
            [
              "back left",
              "4"
            ],
            [
              "front left",
              "5"
            ]
          ]
        }
      ],
      output: null,
      colour: Blockly.Constants.Zumi.HUE_Orange,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Blocks["zumi_get_z_gyro_data_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "get z angle",
      output: null,
      colour: Blockly.Constants.Zumi.HUE_Orange,
      tooltip: "",
      helpUrl: ""
    });
  }
};

  
Blockly.Blocks["zumi_get_x_gyro_data_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "get x angle",
      output: null,
      colour: Blockly.Constants.Zumi.HUE_Orange,
      tooltip: "",
      helpUrl: ""
    });
  }
};


Blockly.Blocks["zumi_get_y_gyro_data_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "get y angle",
      output: null,
      colour: Blockly.Constants.Zumi.HUE_Orange,
      tooltip: "",
      helpUrl: ""
    });
  }
};



Blockly.Blocks["zumi_import_camera_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "import camera",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};


Blockly.Blocks["zumi_start_camera_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "start camera",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};


Blockly.Blocks["zumi_stop_camera_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "close camera",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_camera_capture_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "take picture",
      output: null,
      colour: Blockly.Constants.Zumi.HUE_Orange,
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Blocks["zumi_forward_step_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 forward step at angle %2 ",
      args0: [
        {
          type: "field_image",
          src: "images/icons/forward.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_number",
          name: "NUM0",
          value: 0,
          min: 0
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_driving,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_load_knn_model_junior"] = {
  init: function() {
    this.jsonInit({
      "type": "zumi_load_knn_model_junior",
      "message0": "loading KNN model %1",
      "args0": [
        {
          "type": "field_input",
          "name": "MODELNAME",
          "text": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};


Blockly.Blocks["zumi_reverse_step_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "%1 reverse step at angle %2 ",
      args0: [
        {
          type: "field_image",
          src: "images/icons/reverse.svg",
          width: 25,
          height: 25,
          alt: "*"
        },
        {
          type: "field_number",
          name: "NUM0",
          value: 0,
          min: 0
        }
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Constants.Zumi.HUE_driving,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};


Blockly.Blocks["zumi_find_qr_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "find QR code %1",
      args0: [
        {
          "type": "input_value",
          "name": "NAME"
        }
             ],
      output: null,
      colour: Blockly.Constants.Zumi.HUE_Orange,
      tooltip: Blockly.Msg.TEXT_PRINT_TOOLTIP,
      helpUrl:""
    });
  }
};

Blockly.Blocks["zumi_knn_label_junior"] = {
  init: function() {
    this.jsonInit({
      "type": "zumi_knn_label_junior",
      "message0": "%1",
      "args0": [
        {
          "type": "field_input",
          "name": "KNNLABEL",
          "text": ""
        }
      ],
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};


Blockly.Blocks["zumi_get_qr_message_junior"] = {
     init: function() {
      this.jsonInit({
        message0: "get QR code message %1",
        args0: [
          {
            "type": "input_value",
            "name": "NAME"
          }
               ],
        output: null,
        colour: Blockly.Constants.Zumi.HUE_Orange,
        tooltip: Blockly.Msg.TEXT_PRINT_TOOLTIP,
        helpUrl:""
      });
  }
};

Blockly.Blocks["zumi_reset_gyro_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "reset gyro",
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_knn_predict"] = {
  init: function() {
    this.jsonInit({
      "type": "zumi_knn_predict",
      "message0": "predict %1",
      "args0": [
        {
          "type": "input_value",
          "name": "FRAME"
        }
      ],
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};