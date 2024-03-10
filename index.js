function puzzleResetter()
{
    localStorage.setItem("puzzleOne", 0);
    localStorage.setItem("puzzleOneGate", 0);

    localStorage.setItem("puzzleTwo", 0);
    localStorage.setItem("storedFirstName", JSON.stringify("John"));
    localStorage.setItem("storedLastName", JSON.stringify("Doe"));
    localStorage.setItem("storedUserName", JSON.stringify("UserName"));
    localStorage.setItem("storedEmail", JSON.stringify("email@email.com"));
    localStorage.setItem("storedAddressOne", JSON.stringify("1234 White House Lane"));
    localStorage.setItem("storedAddressTwo", JSON.stringify("x"));
    localStorage.setItem("storedCountry", JSON.stringify("ZooTopia"));
    localStorage.setItem("storedState", JSON.stringify("state of confusion"));
    localStorage.setItem("storedZip", JSON.stringify("Coat zippers"));

    localStorage.setItem("puzzleThree", 0);
    localStorage.setItem("promoResult", JSON.stringify(" "));
    localStorage.setItem("givenPromoCode", JSON.stringify(" "));

    localStorage.setItem("puzzleFour", 0);

    localStorage.setItem("puzzleFive", 0);
    friends[0] = 0;
    friends[1] = 0;
    friends[2] = 0;
    friends[3] = 0
    friends[4] = 0
    localStorage.setItem("count", 0);
    localStorage.setItem("friends",JSON.stringify(friends));
}

// localStorage.setItem("storedAccountName", JSON.stringify("test"));

/*
Puzzle One (Home)
*/
function puzzleOne(a)
{
    // console.log(a);
    if (a == 'I love Intricity')
    {
        console.log("puzzleOne Has been Completed");
        localStorage.setItem("puzzleOne", 1);
    }
}

function puzzleOneGateUnlock()
{
    // localStorage.setItem("puzzleOneGate", 1);
    console.log("Search 'I love Intricity' to solve puzzle 1");
}










/*
puzzle Two (Account)
*/
function puzzleTwo()
{
    // console.log("reached51");
    if (JSON.parse(localStorage.getItem("storedUserName")) != "UserName" && 
        JSON.parse(localStorage.getItem("storedFirstName")) != "John" &&
        JSON.parse(localStorage.getItem("storedLastName")) != "Doe" &&
        JSON.parse(localStorage.getItem("storedEmail")) != "email@email.com" &&
        JSON.parse(localStorage.getItem("storedAddressOne")) != "1234 White House Lane" &&
        JSON.parse(localStorage.getItem("storedCountry")) != "Zootopia" &&
        JSON.parse(localStorage.getItem("storedState")) != "state of confusion" &&
        JSON.parse(localStorage.getItem("storedZip")) != "Coat zippers")
    {
        console.log("puzzleTwo Has been Completed");
        localStorage.setItem("puzzleTwo", 1);
    }
    else
    {
        console.log("puzzleTwo not completed");
    }
}

function getAccountInformation()
{
    //console.log(JSON.parse(localStorage.getItem("storedAccountName")));
    document.getElementById("usernameText").innerHTML= JSON.parse(localStorage.getItem("storedUserName"));
    document.getElementById("accountNameText").innerHTML= JSON.parse(localStorage.getItem("storedFirstName")) + ' ' + JSON.parse(localStorage.getItem("storedLastName"));
    document.getElementById("emailText").innerHTML= JSON.parse(localStorage.getItem("storedEmail"));
    document.getElementById("addressOneText").innerHTML= JSON.parse(localStorage.getItem("storedAddressOne"));
    document.getElementById("addressTwoText").innerHTML= JSON.parse(localStorage.getItem("storedAddressTwo"));
    document.getElementById("locationText").innerHTML= JSON.parse(localStorage.getItem("storedCountry")) + ', ' + JSON.parse(localStorage.getItem("storedState")) + ', ' + JSON.parse(localStorage.getItem("storedZip"));
}

function setAccountInformation(firstName, lastName, userName, email, addressOne, addressTwo, country, state, zip)
{
    //console.log("reached83");
    localStorage.setItem("storedFirstName", JSON.stringify(firstName));
    localStorage.setItem("storedLastName", JSON.stringify(lastName));
    localStorage.setItem("storedUserName", JSON.stringify(userName));
    localStorage.setItem("storedEmail", JSON.stringify(email));
    localStorage.setItem("storedAddressOne", JSON.stringify(addressOne));
    localStorage.setItem("storedAddressTwo", JSON.stringify(addressTwo));
    localStorage.setItem("storedCountry", JSON.stringify(country));
    localStorage.setItem("storedState", JSON.stringify(state));
    localStorage.setItem("storedZip", JSON.stringify(zip));
}









/*
    Puzzle Three (Support Us)
*/
function puzzleThree(promo)
{
    if (promo == "free")
    {
        console.log("Puzzle Three Completed!!!");
        localStorage.setItem("puzzleThree", 1);
        localStorage.setItem("promoResult", JSON.stringify("Puzzle Completed!!"));
        localStorage.setItem("givenPromoCode", JSON.stringify("free"));
        document.getElementById("promoResultText").innerHTML= JSON.parse(localStorage.getItem("promoResult"));
        document.getElementById("givenPromoCodeText").innerHTML= JSON.parse(localStorage.getItem("givenPromoCode"));
    }
}

function getPromoInfo()
{
    document.getElementById("promoResultText").innerHTML= JSON.parse(localStorage.getItem("promoResult"));
    document.getElementById("givenPromoCodeText").innerHTML= JSON.parse(localStorage.getItem("givenPromoCode"));
}





/*
 Puzzle Four (About us)
 */
function puzzleFour(b)
{
    if (b == 'Hidden puzzle')
    {
        console.log("puzzleFour Has been Completed");
        localStorage.setItem("puzzleFour", 1);
    }
}






/*
General functions 
*/
function myFunction() 
{
    var number = 0;
    if (localStorage.getItem("puzzleOne") == 1)
    {
        number++;
    }

    if (localStorage.getItem("puzzleTwo") == 1)
    {
        number++;
    }

    if (localStorage.getItem("puzzleThree") == 1)
    {
        number++;
    }

    if (localStorage.getItem("puzzleFour") == 1)
    {
        number++;
    }

    if (localStorage.getItem("puzzleFive") == 1)
    {
        number++;
    }
    document.getElementById("myText").innerHTML = number;
}









/*
    PuzzleFive 
 */
function puzzleFive()
{
    // if (JSON.parse(localStorage.getItem("friends"))[0] != 0 &&
    //     JSON.parse(localStorage.getItem("friends"))[1] != 0 &&
    //     JSON.parse(localStorage.getItem("friends"))[2] != 0 &&
    //     JSON.parse(localStorage.getItem("friends"))[3] != 0 &&
    //     JSON.parse(localStorage.getItem("friends"))[4] != 0)
    if (localStorage.getItem("count") >= 5)
    {
        console.log("puzzleFive Has been Completed");
        localStorage.setItem("puzzleFive", 1);
    }
}

/* global bootstrap: false */
(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

fetch("./friendsJSON.json")
    .then(response => response.json())
    .then(myFriends => loadFriends(myFriends));

var qAnswer = null;
 var friends = []
var userId = null;

function setAnswer(answer) {
    qAnswer = answer
}

function setUserId(ID) {
    userId = ID;
    console.log("working")
}

function loadFriends(myFriends) 
{
    var messageSidebar = document.getElementById("friendsList");
    // Read every movie from the array
    for (var i = 0; i < myFriends.friends.length; i++) 
    {
        let name = myFriends.friends[i].friendName;
        let ID = myFriends.friends[i].friendID;
        let pPic = myFriends.friends[i].profilePic;
        let namePic = myFriends.friends[i].profilePicName;
        let url = myFriends.friends[i].url;
        let answer = myFriends.friends[i].answer;
        friends.push('0');



        // create a new HTML div division
        let AddFriends = document.createElement("div");
        // add class = “col” to new division for Bootstrap
        AddFriends.classList.add("friendList");
        // create Bootstrap card
        if (messageSidebar.classList.contains(ID)) 
        {
            AddFriends.innerHTML = `
                <a href=${url} class="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">${name}'s Messages</strong>
                         <small class="text-body-secondary">
                            <img src=${pPic} alt=${namePic} height="50px" width="50px" class="rounded-image">
                        </small>
                    </div>
                <div class="col-10 mb-1 small">Respond back to what ${name} had to say.
                </div>
                </a>
                `;
            setAnswer(answer);
            setUserId(ID);
            // append new division
            messageSidebar.appendChild(AddFriends);
        }
        else 
        {
            AddFriends.innerHTML = `
                <a href=${url} class="list-group-item list-group-item-action py-3 lh-sm">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">${name}'s Messages</strong>
                         <small class="text-body-secondary">
                            <img src=${pPic} alt=${namePic} height="50px" width="50px" class="rounded-image">
                        </small>
                    </div>
                <div class="col-10 mb-1 small">Respond back to what ${name} had to say.
                </div>
                </a>
                `;

            // append new division
            messageSidebar.appendChild(AddFriends);
        }
        console.log(ID);
    } // end of for
} // end of function


function submitInput() 
{
    var userInput = document.getElementById("userInput").value;
    var userOutputDiv = document.getElementById("userOutput");
    var sysOutputDiv = document.getElementById("sysOutput");
    userOutputDiv.textContent = userInput;
    userOutputDiv.classList.remove('hidden')

    friends[0] = JSON.parse(localStorage.getItem("friends"))[0];
    friends[1] = JSON.parse(localStorage.getItem("friends"))[1];
    friends[2] = JSON.parse(localStorage.getItem("friends"))[2]; 
    friends[3] = JSON.parse(localStorage.getItem("friends"))[3];
    friends[4] = JSON.parse(localStorage.getItem("friends"))[4];


    if (userInput.toLowerCase() == qAnswer) 
    {
        friends[userId] = 1;
        var count = friends[0] + friends[1] + friends[2] + friends[3] + friends[4];
        // for (var i = 0; i < friends.length; i++) 
        // {
        //     if (friends[i] === 1) 
        //     {
        //         count++;
        //     }
        // }
        sysOutputDiv.textContent = "correct " + count +"/5";
        sysOutputDiv.classList.remove('hidden')
    }
    else 
    {
        sysOutputDiv.textContent = "incorrect";
        sysOutputDiv.classList.remove('hidden')
    }

    localStorage.setItem("count", count);
    localStorage.setItem("friends",JSON.stringify(friends));
    //console.log(JSON.parse(localStorage.getItem("friends"))[0]);
}