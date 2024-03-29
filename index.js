import './style.css';
import './main.scss';

class Robot {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

let robots = [
    new Robot(1, "First", "first@robot.ru"),
    new Robot(2, "Second", "second@robot.ru"),
    new Robot(3, "Third", "third@robot.ru"),
    new Robot(4, "Fourth", "first@robot.ru"),
    new Robot(5, "Fifth", "second@robot.ru"),
    new Robot(6, "Sixth", "third@robot.ru"),
];

function appendRobot(robot) {
    const robotContainer = document.createElement("div");
    robotContainer.classList.add("robot");

    const robotAvatar = document.createElement("img");
    robotAvatar.classList.add("robot__avatar");
    robotAvatar.src = `https://robohash.org/${robot.id}?size=200x200`;
    robotContainer.append(robotAvatar);

    const robotName = document.createElement("h3");
    robotName.innerHTML = robot.name;
    robotContainer.append(robotName);

    const robotEmail = document.createElement("p");
    robotEmail.innerHTML = robot.email;
    robotContainer.append(robotEmail);

    robotContainer.oncontextmenu = showRobotInfo(robot);
    document.querySelector(".robots").append(robotContainer);
}

robots.forEach((robot) => appendRobot(robot));

function createRobot() {
    let robotID = robots.length ? robots[robots.length - 1].id + 1 : 1;
    let robotName = document.querySelector("#name").value;
    let robotEmail = document.querySelector("#email").value;

    let newRobot = new Robot(robotID, robotName, robotEmail);
    robots.push(newRobot);
    appendRobot(newRobot);

    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
}

document.querySelector("#create").onclick = createRobot;

document.body.addEventListener("click", () => {
    let showRobotCard = false;
    robotCard.style.display = showRobotCard ? "flex" : "none";
})

function showRobotInfo(robot) {
    return function(e) {
        robotCard.innerHTML = "";
        const robotAvatar = document.createElement("img");
        robotAvatar.src = `https://robohash.org/${robot.id}?size=300x300`;
        robotCard.append(robotAvatar);

        showRobotCard = true;
        robotCard.style.display = showRobotCard ? "flex" : "none";
        robotCard.style.top = e.clientY + "px";
        robotCard.style.left = e.clientX + "px";
        
        e.preventDefault();
    }
}