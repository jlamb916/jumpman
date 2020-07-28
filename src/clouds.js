import {c, canvas} from './index';



export const createClouds = () => {
        let howManyClouds = 6;
        let clouds = [];
        for (var i = 0; i < howManyClouds; i++) {
            clouds.push([Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)])
        }
        return clouds
}

export const moveClouds = () => {
    let vel = [-1, 1]
    for (let i = 0; i < this.clouds.length; i++) {
        if (this.cloud[i][1] > canvas.height) {
            this.cloud[i][0] = Math.random() * canvas.width;
            this.cloud[i][1] = 0 - ((this.cloud[i][0] + this.cloud[i][1]) / 2);
        } else {
            this.cloud[i][1] += 5;
        }
        if (this.cloud[i][0] < 0 || this.cloud[i][0] > canvas.width) {
            this.cloud[i][0] = Util.wrap(this.cloud[i][0], canvas.width);
        }
        this.cloud[i][0] += vel[Math.floor(Math.random() * 2)]
    }
}

export const renderCloud = (startX, startY) => {
        c.beginPath()
        c.moveTo(startX, startY);
        c.bezierCurveTo(startX - 35, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
        c.bezierCurveTo(startX + 60, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
        c.bezierCurveTo(startX + 200, startY + 70, startX + 300, startY + 40, startX + 250, startY + 20);
        c.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
        c.bezierCurveTo(startX + 80, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
        c.bezierCurveTo(startX + 40, startY - 75, startX - 20, startY - 60, startX, startY);
        c.closePath();
        c.fillStyle = 'rgba(255, 255, 255, 0.4)'
        c.fill();
        c.strokeStyle = 'white';
        c.stroke();
}

