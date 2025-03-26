// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const baseA = parseFloat(document.getElementById("base1").value)
  const baseB = parseFloat(document.getElementById("base2").value)
  const height = parseFloat(document.getElementById("height").value)
  // output
  document.getElementById("answer").innerHTML =
    "Area is: " + (baseA+baseB)*height/2 + "cm²"
}
