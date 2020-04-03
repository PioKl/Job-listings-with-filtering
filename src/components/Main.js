import React from 'react';
import '../style/Main.scss';
import photosnap from '../img/photosnap.svg';
import iconRemove from '../img/icon-remove.svg';

const Main = () => {
    return (
        <main className="main">
            <div className="filters">
                <ul className="filters__list">
                    <li className="filters__item">Frontend<button className="filters__item-remove"><img className="filters__remove-img" src={iconRemove} alt="iconRemove" /></button></li>
                    <li className="filters__item">Javascript<button className="filters__item-remove"><img className="filters__remove-img" src={iconRemove} alt="iconRemove" /></button></li>
                    <li className="filters__item">HTML<button className="filters__item-remove"><img className="filters__remove-img" src={iconRemove} alt="iconRemove" /></button></li>
                    <li className="filters__item">CSS<button className="filters__item-remove"><img className="filters__remove-img" src={iconRemove} alt="iconRemove" /></button></li>
                </ul>
                <button className="filters__clear">Clear</button>
            </div>
            <div className="job-offers job-offers--featured">
                <div className="job-offers__info">
                    <figcaption className="job-offers__offer">
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
                    </figcaption>
                </div>
                <div className="job-offers__skills">
                    <ul className="job-offers__skills-list">
                        <li className="job-offers__skills-item"><button className="job-offers__skills-btn">Frontend</button></li>
                        <li className="job-offers__skills-item"><button className="job-offers__skills-btn">Senior</button></li>
                        <li className="job-offers__skills-item"><button className="job-offers__skills-btn">HTML</button></li>
                        <li className="job-offers__skills-item"><button className="job-offers__skills-btn">CSS</button></li>
                        <li className="job-offers__skills-item"><button className="job-offers__skills-btn">JavaScript</button></li>
                    </ul>
                </div>
            </div>



        </main>
    );
}

export default Main;