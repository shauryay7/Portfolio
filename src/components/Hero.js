import React, { useEffect, useRef } from 'react';
import './Hero.css';
import profileImg from './profile.jpg'; // Replace with your image
import pfp from './Subject.png';
import bg from './bg.jpeg';

function Hero() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let w = window.innerWidth;
        let h = window.innerHeight;

        canvas.width = w;
        canvas.height = h;

        let midX, midY, particles = [];
        let currentMaxParticles = 0;
        const MaxParticles = 600, ConnectionDist = 50, MaxSpeed = 2.1;
        const Msqrt = Math.sqrt, Mrandom = Math.random;

        let attractPt = [{ x: 0, y: h * 0.5, force: 255 }];
        let repelPt = [{ x: 0, y: h * 0.5, force: 6, minDist: 85 }];

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;

            attractPt.forEach((locus, i) => {
                locus.x = repelPt[i].x = w / 2;
                locus.y = repelPt[i].y = h / 2;
            });

            midX = w / 2;
            midY = h / 2;
            currentMaxParticles = w < 450 ? Math.round(MaxParticles / 3) : (w < 700 ? Math.round(MaxParticles / 1.5) : MaxParticles);
        };

        window.onresize = handleResize;
        handleResize();

        const createParticles = () => {
            for (let i = 0; i < MaxParticles; i++) {
                const vRange = 1.5, vMin = 0.5;
                let vx = Mrandom() * vRange + vMin;
                let vy = Mrandom() * vRange + vMin;
                if (Mrandom() > 0.5) vx *= -1;
                if (Mrandom() > 0.5) vy *= -1;
                particles.push({
                    x: Mrandom() * w,
                    y: Mrandom() * h,
                    xv: Mrandom() * vx,
                    yv: Mrandom() * vy,
                });
            }
        };

        const updateParticles = () => {
            particles.forEach(p => {
                p.x += p.xv;
                p.y += p.yv;

                if (p.x < 0 || p.x > w) p.xv *= -1;
                if (p.y < 0 || p.y > h) p.yv *= -1;

                attractPt.forEach(locus => {
                    let dx = locus.x - p.x;
                    let dy = locus.y - p.y;
                    let distSQ = dx * dx + dy * dy;
                    const force = locus.force / distSQ;
                    p.xv += force * dx / Msqrt(distSQ);
                    p.yv += force * dy / Msqrt(distSQ);
                });
                repelPt.forEach(locus => {
                    let dx = locus.x - p.x;
                    let dy = locus.y - p.y;
                    let dist = Msqrt(dx * dx + dy * dy);
                    if (dist < locus.minDist) {
                        let tx = locus.x - locus.minDist * dx / dist;
                        let ty = locus.y - locus.minDist * dy / dist;
                        p.xv += (tx - p.x) * locus.force;
                        p.yv += (ty - p.y) * locus.force;
                    }
                });
                let speed = Msqrt(p.xv * p.xv + p.yv * p.yv);
                if (speed > MaxSpeed) {
                    p.xv = (MaxSpeed * p.xv) / speed;
                    p.yv = (MaxSpeed * p.yv) / speed;
                }
            });
        };

        const drawConnections = () => {
            particles.forEach((p1, i) => {
                for (let j = i + 1; j < currentMaxParticles; j++) {
                    const p2 = particles[j];
                    const currentDist = Msqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
                    if (currentDist < ConnectionDist) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.strokeStyle = `rgba(200, 200, 255, ${1 - currentDist / ConnectionDist})`;
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
        };

        const animateLines = () => {
            ctx.clearRect(0, 0, w, h);
            updateParticles();
            drawConnections();
            requestAnimationFrame(animateLines);
        };

        createParticles();
        animateLines();
    }, []);

    return (
        <section className="hero">
            <canvas ref={canvasRef} id="canvas"></canvas>

                <div>
                <div className="person">
                    <div className="container">
                     <div className="container-inner">
                        <img className="circle"
                             src={bg}/>
                        <img className="img img1"
                             src={pfp}/>
                    </div>
                 </div>
                 </div>
            <h1 className="neon turquoise">Hi, I'm Shaurya</h1>
            </div>

        </section>
    );
}

export default Hero;