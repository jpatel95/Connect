/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$(document).ready(function() {
    // $("button").click(function() {
    //     var selected = $("#dropdown option:selected").text();
    //     var departing = $("#departing").val();
    //     var returning = $("#returning").val();
    //     if (departing === "" || returning === "") {
    //         alert("Please select departing and returning dates.");
    //     } else {
    //         confirm("Would you like to go to " + selected + " on " + departing + " and return on " + returning + "?");
    //     }
    // });
});

var category = "other";

document.getElementById("button_food").onclick = function () {
    var category = "food";
    document.getElementById("button_food").style.color="#ff9999";
    document.getElementById("button_food").style.border="2px solid #ff9999";
    document.getElementById("button_fun").style.color="white";
    document.getElementById("button_fun").style.border="2px solid white";
    document.getElementById("button_health").style.color="white";
    document.getElementById("button_health").style.border="2px solid white";
    document.getElementById("button_other").style.color="white";
    document.getElementById("button_other").style.border="2px solid white";
};

document.getElementById("button_fun").onclick = function () {
    var category = "fun";
    document.getElementById("button_food").style.color="white";
    document.getElementById("button_food").style.border="2px solid white";
    document.getElementById("button_fun").style.color="#ccff33";
    document.getElementById("button_fun").style.border="2px solid #ccff33";
    document.getElementById("button_health").style.color="white";
    document.getElementById("button_health").style.border="2px solid white";
    document.getElementById("button_other").style.color="white";
    document.getElementById("button_other").style.border="2px solid white";
};

document.getElementById("button_health").onclick = function () {
    var category = "health";
    document.getElementById("button_food").style.color="white";
    document.getElementById("button_food").style.border="2px solid white";
    document.getElementById("button_fun").style.color="white";
    document.getElementById("button_fun").style.border="2px solid white";
    document.getElementById("button_health").style.color="#ccffff";
    document.getElementById("button_health").style.border="2px solid #ccffff";
    document.getElementById("button_other").style.color="white";
    document.getElementById("button_other").style.border="2px solid white";
};

document.getElementById("button_other").onclick = function () {
    var category = "other";
    document.getElementById("button_food").style.color="white";
    document.getElementById("button_food").style.border="2px solid white";
    document.getElementById("button_fun").style.color="white";
    document.getElementById("button_fun").style.border="2px solid white";
    document.getElementById("button_health").style.color="white";
    document.getElementById("button_health").style.border="2px solid white";
    document.getElementById("button_other").style.color="#ffff00";
    document.getElementById("button_other").style.border="2px solid #ffff00";
};


document.getElementById("button_create_event").onclick = function () {
    location.href = "create_account.html";
};

document.getElementById("button_back").onclick = function () {
    location.href = "explore_list_business.html";
};


