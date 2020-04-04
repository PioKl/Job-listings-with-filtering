import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Main.scss';
//import photosnap from '../img/photosnap.svg';
import iconRemove from '../img/icon-remove.svg';

const Main = () => {

    const [filter1, setFilter1] = useState("");
    /*     useEffect(() => {
            console.log(filter1)
        }) */
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/b/5e8884988841e979d0fd84ed/4')
            .then(res => {
                console.log(res);
                setData(res.data.jobs);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    /*     const status = data.map(job => (
            <p className={`job-offers__${job.status}`}>{job.status}</p>
        )) */
    console.log(data.map(job => job.status))
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
            {data.map(job => (
                <div className={`job-offers job-offers${job.featured && `--featured`}`}>
                    <div className="job-offers__info">
                        <figcaption className="job-offers__offer">
                            <img className="job-offers__offer-img" src={require(`../img/${job.companyImg}`)} alt="companyPhoto" />
                            <div className="job-offers__offer-info">
                                <div className="job-offers__first-info">
                                    <p className="job-offers__company">{job.company}</p>
                                    {job.status.map(status => (
                                        <p className={`job-offers__${status}`}>{status}</p>
                                    ))}
                                    {/*                                     <p className="job-offers__new">New!</p>
                                    <p className="job-offers__featured">Featured</p> */}
                                </div>
                                <div className="job-offers__second-info">
                                    <h2 className="job-offers__job-name">{job.jobName}</h2>
                                </div>
                                <div className="job-offers__third-info">
                                    <p className="job-offers__when-add">{job.whenAdd}</p>
                                    <p className="job-offers__time">{job.jobTime}</p>
                                    <p className="job-offers__where">{job.place}</p>
                                </div>
                            </div>
                        </figcaption>
                    </div>
                    <div className="job-offers__skills">
                        <ul className="job-offers__skills-list">
                            {job.skills.map((skill, index) => (
                                <li className="job-offers__skills-item"><button value={skill} onClick={e => setFilter1(e.target.value)} className="job-offers__skills-btn">{skill}</button></li>
                            ))}
                            {/* <li className="job-offers__skills-item"><button value="Frontend" onClick={e => setFilter1(e.target.value)} className="job-offers__skills-btn">Frontend</button></li>
                            <li className="job-offers__skills-item"><button className="job-offers__skills-btn">Senior</button></li>
                            <li className="job-offers__skills-item"><button className="job-offers__skills-btn">HTML</button></li>
                            <li className="job-offers__skills-item"><button className="job-offers__skills-btn">CSS</button></li>
                            <li className="job-offers__skills-item"><button className="job-offers__skills-btn">JavaScript</button></li> */}
                        </ul>
                    </div>
                </div>
            ))}

            {/*             <p>{filter1}</p>
            <ul>
                {data.map(data => (
                    <>
                        <img className="job-offers__offer-img" src={require(`../img/${data.companyImg}`)} alt="costam" />
                        <li key={data.id}>{data.company}</li>
                    </>
                ))}
            </ul> */}


        </main>
    );
}

export default Main;