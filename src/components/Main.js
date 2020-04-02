import React from 'react';
import '../style/Main.scss';
import photosnap from '../img/photosnap.svg';
const Main = () => {
    return (
        <main className="main">
            <div className="job-offers">
                <div className="job-offers__info">
                    <figapction className="job-offers__offer">
                        <img className="job-offers__offer-img" src={photosnap} alt={photosnap} />
                        <div className="job-offers__offer-info">
                            <div className="job-offers__first-info">
                                <p className="job-offers__company">Photosnap</p>
                                <p className="job-offers__new">New!</p>
                                <p className="job-offers__featured">Featured</p>
                            </div>
                            <div className="job-offers__second-info">
                                <h2 className="job-offers__category">Senior Frontend Developer</h2>
                            </div>
                            <div className="job-offers__third-info">
                                <p className="job-offers__when-add">1d ago</p>
                                <p className="job-offers__time">Full Time</p>
                                <p className="job-offers__where">USA only</p>
                            </div>
                        </div>
                    </figapction>
                </div>
                <div className="job-offers__filters">
                    <ul className="job-offers__list">
                        <li className="job-offers__role job-offers__list-item"><button className="btn">Frontend</button></li>
                        <li className="job-offers__level job-offers__list-item"><button className="btn">Senior</button></li>
                        <li className="job-offers__languages job-offers__list-item"><button className="btn">HTML</button></li>
                        <li className="job-offers__languages job-offers__list-item"><button className="btn">CSS</button></li>
                        <li className="job-offers__languages job-offers__list-item"><button className="btn">JavaScript</button></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Main;