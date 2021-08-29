/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Python for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
"use strict";

goog.provide("Blockly.Python.zumi");

goog.require("Blockly.Python");

Blockly.Python["zumi_turn_degree_junior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "engine.turn_degree(" + arg0 + ")\n";
};

Blockly.Python["zumi_turn_degree_senior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "engine.turn_degree(" + arg0 + ")\n";
};


Blockly.Python["zumi_turn_left_senior"] = function(block) {
  return "engine.left()\n";
};

Blockly.Python["zumi_forward_seconds_junior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "zumi.forward(duration=" + arg0 + ")\n";
};


Blockly.Python["zumi_parallel_park_junior"] = function(block) {
  return "zumi.parallel_park()\n";
};

Blockly.Python["zumi_brake_junior"] = function(block) {
  return "zumi.hard_brake()\n";
};

Blockly.Python["zumi_reverse_seconds_junior"] = function(block) {
  var arg0 = parseInt(block.getFieldValue("NUM0"));
  return "zumi.reverse(duration=" + arg0 + ")\n";
};

Blockly.Python["zumi_turn_left_junior"] = function(block) {
  var arg0 = parseInt(block.getFieldValue("ANGLE"));
  var time = 1;
  if(arg0>=180){
    time = 2;
  }
  return "zumi.turn_left(desired_angle=" + arg0 +", duration="+time+")\n";
};

Blockly.Python["zumi_turn_right_junior"] = function(block) {
  var arg0 = parseInt(block.getFieldValue("ANGLE"));
  var time = 1;
  if(arg0>=180){
    time = 2;
  }
  return "zumi.turn_right(desired_angle=" + arg0 +", duration="+time+")\n";
};

Blockly.Python["zumi_left_u_turn_junior"] = function(block) {
  var arg0 = parseInt(block.getFieldValue("NUM0"));
  return "zumi.left_u_turn(speed=" + arg0 + ", step=4, delay=0.02)\n";
};

Blockly.Python["zumi_right_u_turn_junior"] = function(block) {
  var arg0 = parseInt(block.getFieldValue("NUM0"));
  return "zumi.right_u_turn(speed=" + arg0 + ", step=4, delay=0.02)\n";
};

Blockly.Python["zumi_circle_junior"] = function(block) {
  var arg0 = block.getFieldValue("CIRCLE");
  if(arg0 === 'left'){
    return "zumi.left_circle()\n"; 
  }
  return "zumi.right_circle()\n";
};

Blockly.Python["zumi_triangle_junior"] = function(block) {
  var arg0 = block.getFieldValue("TRIANGLE");
  if(arg0 === 'left'){
    return "zumi.triangle_left()\n"; 
  }
  return "zumi.triangle_right()\n";
};

Blockly.Python["zumi_square_junior"] = function(block) {
  var arg0 = block.getFieldValue("SQUARE");
  if(arg0 === 'left'){
    return "zumi.square_left()\n"; 
  }
  return "zumi.square_right()\n";
};

Blockly.Python["zumi_rectangle_junior"] = function(block) {
  return "zumi.rectangle(direction=-1)\n";
};

Blockly.Python["zumi_figure_8_junior"] = function(block) {
  return "zumi.figure_8()\n";
};

Blockly.Python["zumi_j_turn_junior"] = function(block) {
  return "zumi.j_turn()\n";
};

Blockly.Python["zumi_draw_text_junior"] = function(block) {
  var arg0 = block.getFieldValue("TEXT");
  return "screen.draw_text_center(\"" + arg0 + "\")\n";
};

Blockly.Python["zumi_sad_junior"] = function(block) {
  return "screen.sad()\n";
};

Blockly.Python["zumi_closed_eyes_junior"] = function(block) {
  return "screen.close_eyes()\n";
};

Blockly.Python["zumi_angry_eyes_junior"] = function(block) {
  return "screen.angry()\n";
};

Blockly.Python["zumi_sleepy_eyes_junior"] = function(block) {
  return "screen.sleepy_eyes()\n";
};

Blockly.Python["zumi_happy_eyes_junior"] = function(block) {
  return "screen.happy()\n";
};

Blockly.Python["zumi_glimmer_eyes_junior"] = function(block) {
  return "screen.glimmer()\n";
};

Blockly.Python["zumi_open_eyes_junior"] = function(block) {
  return "screen.hello()\n";
};

Blockly.Python["zumi_blinking_eyes_junior"] = function(block) {
  return "screen.blink()\n";
};

Blockly.Python["zumi_forward_duration_senior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "engine.forward(" + arg0 + ")\n";
};

Blockly.Python["zumi_reverse_junior"] = function(block) {
  return "engine.reverse()\n";
};

Blockly.Python["zumi_reverse_senior"] = function(block) {
  return "engine.reverse()\n";
};

Blockly.Python["zumi_reverse_duration_junior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "engine.reverse(" + arg0 + ")\n";
};

Blockly.Python["zumi_reverse_duration_senior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "engine.reverse(" + arg0 + ")\n";
};

Blockly.Python["zumi_stop_junior"] = function(block) {
  return "engine.stop()\n";
};

Blockly.Python["zumi_stop_senior"] = function(block) {
  return "engine.stop()\n";
};

Blockly.Python["zumi_get_distance_junior"] = function(block) {
  var arg0 = block.getFieldValue("TYPE");
  return [
    "infrared.get_distance(" + arg0 + ")",
    Blockly.Python.ORDER_FUNCTION_CALL
  ];
};

Blockly.Python["zumi_personality_act_junior"] = function(block) {
  var arg0 = block.getFieldValue("EMOTION");
  if (arg0 === "Emotion.HAPPY") {
    return "personality.happy_zumi()\n";
  } else if (arg0 === "Emotion.SAD") {
    return "personality.sad_zumi()\n";
  }
  return "personality.excited_zumi()\n";
};

Blockly.Python["zumi_personality_act_senior"] = function(block) {
  var arg0 = block.getFieldValue("EMOTION");
  if (arg0 === "Emotion.HAPPY") {
    return "personality.happy_zumi()\n";
  } else if (arg0 === "Emotion.SAD") {
    return "personality.sad_zumi()\n";
  }
  return "personality.excited_zumi()\n";
};

Blockly.Python["zumi_face_detected_junior"] = function(block) {
  return ["camera.face_detected()", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["zumi_track_face_junior"] = function(block) {
  return "camera.track_face()\n";
};

Blockly.Python["zumi_take_photo_junior"] = function(block) {
  return "camera.take_photo()\n";
};

Blockly.Python["zumi_smile_detected_junior"] = function(block) {
  return "DeepLearning.smile_detected()\n";
};

Blockly.Python["zumi_collect_smile_junior"] = function(block) {
  var arg0 = block.getFieldValue("EMOTION");
  return "DeepLearning.collect_smile()\n";
};

Blockly.Python["zumi_get_distance_senior"] = function(block) {
  var arg0 = block.getFieldValue("TYPE");
  return [
    "infrared.get_distance(" + arg0 + ")",
    Blockly.Python.ORDER_FUNCTION_CALL
  ];
};

Blockly.Python["play_note_junior"] = function(block) {
  var arg0 = block.getFieldValue("TEXT");
  var arg1 = block.getFieldValue("SECONDS");
  return "zumi.play_note("+arg0+","+arg1+")\n";
};

Blockly.Python["zumi_angry_sound_junior"] = function(block) {
  return "personality.sound.angry()\n";
};

Blockly.Python["zumi_happy_sound_junior"] = function(block) {
  return "personality.sound.happy()\n";
};

Blockly.Python["zumi_blink_sound_junior"] = function(block) {
  return "personality.sound.blink()\n";
};

Blockly.Python["zumi_celebrate_sound_junior"] = function(block) {
  return "personality.sound.celebrate()\n";
};

Blockly.Python["zumi_wake_up_sound_junior"] = function(block) {
  return "personality.sound.wake_up()\n";
};

Blockly.Python["zumi_desoriented_sound_junior"] = function(block) {
  return "personality.sound.disoriented_1()\n";
};

Blockly.Python["zumi_oops_front_junior"] = function(block) {
  return "personality.sound.oops_front()\n";
};

Blockly.Python["zumi_oops_back_junior"] = function(block) {
  return "personality.sound.oops_back()\n";
};

Blockly.Python["zumi_face_detected_senior"] = function(block) {
  return ["camera.face_detected()\n", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["zumi_track_face_senior"] = function(block) {
  return "camera.track_face()\n";
};

Blockly.Python["zumi_take_photo_senior"] = function(block) {
  return "camera.take_photo()\n";
};

Blockly.Python["zumi_smile_detected_senior"] = function(block) {
  return "DeepLearning.smile_detected()\n";
};

Blockly.Python["zumi_collect_smile_senior"] = function(block) {
  var arg0 = block.getFieldValue("EMOTION");
  return "DeepLearning.collect_smile()\n";
};

Blockly.Python["zumi_camera_show_junior"] = function(block) {
  return "camera.show()\n";
};

Blockly.Python["zumi_camera_show_senior"] = function(block) {
  return "camera.show()\n";
};

Blockly.Python["zumi_engine_set_speed_junior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "engine.set_speed(" + arg0 + ")\n";
};

Blockly.Python["zumi_engine_set_speed_senior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "engine.set_speed(" + arg0 + ")\n";
};

Blockly.Python["zumi_lights_on_junior"] = function(block) {
  return "zumi.all_lights_on()\n";
};

Blockly.Python["zumi_lights_on_senior"] = function(block) {
  return "zumi.turn_on()\n";
};

Blockly.Python["zumi_lights_off_junior"] = function(block) {
  return "zumi.all_lights_off()\n";
};

Blockly.Python["zumi_headlights_on_junior"] = function(block) {
  return "zumi.headlights_on()\n";
};

Blockly.Python["zumi_headlights_off_junior"] = function(block) {
  return "zumi.headlights_off()\n";
};

Blockly.Python["zumi_brake_lights_on_junior"] = function(block) {
  return "zumi.brake_lights_on()\n";
};

Blockly.Python["zumi_brake_lights_off_junior"] = function(block) {
  return "zumi.brake_lights_off()\n";
};

Blockly.Python["zumi_hazard_lights_on_junior"] = function(block) {
  return "zumi.hazard_lights_on()\n";
};

Blockly.Python["zumi_hazard_lights_off_junior"] = function(block) {
  return "zumi.hazard_lights_off()\n";
};

Blockly.Python["zumi_signal_left_on_junior"] = function(block) {
  return "zumi.signal_left_on()\n";
};

Blockly.Python["zumi_signal_left_off_junior"] = function(block) {
  return "zumi.signal_left_off()\n";
};

Blockly.Python["zumi_signal_right_on_junior"] = function(block) {
  return "zumi.signal_right_on()\n";
};

Blockly.Python["zumi_signal_right_off_junior"] = function(block) {
  return "zumi.signal_right_off()\n";
};


Blockly.Python["zumi_lights_off_senior"] = function(block) {
  return "lights.turn_off()\n";
};

Blockly.Python["zumi_jedi_drive_junior"] = function(block) {
  return "infrared.jedi_drive()\n";
};

Blockly.Python["zumi_jedi_drive_senior"] = function(block) {
  return "infrared.jedi_drive()\n";
};

Blockly.Python["zumi_wait_junior"] = function(block) {
  var arg0 = parseInt(block.getFieldValue("NUM0"));
  return "time.sleep(" + arg0 + ")\n";
};

Blockly.Python["zumi_wait_senior"] = function(block) {
  var arg0 = parseInt(block.getFieldValue("NUM0"));
  return "timer.wait(" + arg0 + ")\n";
};

Blockly.Python["zumi_sleep_junior"] = function(block) {
  return "eyes.sleep()\n";
};

Blockly.Python["zumi_sleep_senior"] = function(block) {
  return "eyes.sleep()\n";
};

Blockly.Python["zumi_wakeup_junior"] = function(block) {
  return "eyes.wake_up()\n";
};

Blockly.Python["zumi_wakeup_senior"] = function(block) {
  return "eyes.wake_up()\n";
};

Blockly.Python["zumi_blink_junior"] = function(block) {
  return "eyes.blink()\n";
};

Blockly.Python["zumi_blink_senior"] = function(block) {
  return "eyes.blink()\n";
};

Blockly.Python["zumi_excited_junior"] = function(block) {
  return "eyes.excited()\n";
};

Blockly.Python["zumi_excited_senior"] = function(block) {
  return "eyes.excited()\n";
};

Blockly.Python["zumi_look_left_junior"] = function(block) {
  return "eyes.look_left()\n";
};

Blockly.Python["zumi_look_left_senior"] = function(block) {
  return "eyes.look_left()\n";
};

Blockly.Python["zumi_look_right_junior"] = function(block) {
  return "eyes.look_right()\n";
};

Blockly.Python["zumi_look_right_senior"] = function(block) {
  return "eyes.look_right()\n";
};

Blockly.Python["zumi_hello_junior"] = function(block) {
  return "eyes.hello()\n";
};

Blockly.Python["zumi_hello_senior"] = function(block) {
  return "eyes.hello()\n";
};

Blockly.Python["zumi_get_ir_data_junior"] = function(block) {
  var dropdown_ir_data = block.getFieldValue('ir_data');
  var code = "zumi.get_all_IR_data()["+ dropdown_ir_data +"]";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["zumi_get_z_gyro_data_junior"] = function(block) {
  var code = "int(zumi.read_z_angle())";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["zumi_get_x_gyro_data_junior"] = function(block) {
  var code = "int(zumi.read_x_angle())";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["zumi_get_y_gyro_data_junior"] = function(block) {
  var code = "int(zumi.read_y_angle())";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python["zumi_import_camera_junior"] = function(block) {
  var code = "from zumi.util.camera import Camera\nfrom zumi.util.vision import Vision\ncamera = Camera()\nvision = Vision()\n";
   return code;
};

Blockly.Python["zumi_start_camera_junior"] = function(block) {
  var code = "camera.start_camera()\n";
   return code;
};

Blockly.Python["zumi_stop_camera_junior"] = function(block) {
  var code = "camera.close()\n";
   return code;
};

Blockly.Python["zumi_camera_capture_junior"] = function(block) {
  var code = "camera.capture()";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python["zumi_find_qr_junior"] = function(block) {
  var frame = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = "vision.find_QR_code(" + frame + ")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["zumi_get_qr_message_junior"] = function(block) {
  var qr_code = Blockly.Python.valueToCode(block, 'NAME',Blockly.Python.ORDER_NONE);
  var code = "vision.get_QR_message(" + qr_code + ")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["zumi_forward_step_junior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "zumi.forward_step(speed=40,desired_angle=" + arg0 + ")\n";
};

Blockly.Python["zumi_reverse_step_junior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "zumi.reverse_step(speed=40,desired_angle=" + arg0 + ")\n";
};

Blockly.Python["zumi_reset_gyro_junior"] = function(block) {
  var code = "zumi.reset_gyro()\n";
   return code;
};

Blockly.Python["zumi_load_knn_model_junior"] = function(block) {
  var dropdown_model = block.getFieldValue('MODELNAME');
  var code = "knn.load_model('" + dropdown_model + "')";
  return code;
};

Blockly.Python['zumi_knn_label_junior'] = function(block) {
  var dropdown_name = block.getFieldValue('KNNLABEL');
  var code = dropdown_name;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['zumi_knn_predict'] = function(block) {
  var frame = Blockly.Python.valueToCode(block, 'FRAME', Blockly.Python.ORDER_ATOMIC);
  var code = 'knn.predict(' + frame + ')';
  return [code, Blockly.Python.ORDER_NONE];
};