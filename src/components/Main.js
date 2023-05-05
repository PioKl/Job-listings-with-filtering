import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Main.scss';
import iconRemove from '../img/icon-remove.svg';
import Footer from "./Footer";

const Main = () => {

    const [data, setData] = useState([]);
    const [filters, setFilters] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/v3/b/64555ae38e4aa6225e96f5ec') //własne utworzenie api poprzez json, gdzie zostały dodane niezbędne dane
            .then(res => {
                console.log(res);
                setData(res.data.record.jobs);
                setIsLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleAddFilter = (e) => {
        const updateFilters = [...filters];
        if (updateFilters.indexOf(e.target.value) === -1) { //jesli takiego filtra jeszcze nie ma to dodaj
            updateFilters.push(e.target.value);
        }
        else {
            return //w przeciwnym wypadku nic nie rob
        }
        setFilters(updateFilters);
    }

    const handleClearFilters = () => {
        setFilters([]);
    }

    const handleRemoveFilter = (e) => {
        console.log(e.currentTarget.value)
        const updateFilters = [...filters];
        const filtersAfterDelete = updateFilters.filter(item => item !== e.currentTarget.value)
        setFilters(filtersAfterDelete)
    }

    //Filtrowanie danych do wyświetlenia na podstawie wybranych filtrów
    const dataWithFilter = data.filter(job => {
        //https://stackoverflow.com/questions/54837999/specify-multiple-integers-with-javascript-includes
        return filters.every(filter => job.skills.includes(filter)); //wyswietl te oferty, ktore zawieraja sobie wszystkie skille z tego co uzytkownik wybral w filters (&&)
    })

    return (
        <>
            <main className="main">
                {/* Jeśli użytkownik dodał jakiś filtr wtedy dopiero może się ten div pojawić */}
                {filters.length > 0 && <div className="filters">
                    <ul className="filters__list">
                        {filters.map((filter, index) => (
                            <li key={index} className="filters__item">{filter}<button value={filter} className="filters__item-remove" onClick={handleRemoveFilter}><img className="filters__remove-img" src={iconRemove} alt="iconRemove" /></button></li>
                        ))}
                    </ul>
                    <button className="filters__clear" onClick={handleClearFilters}>Clear</button>
                </div>}

                {dataWithFilter.map((job, index) => (
                    <div key={index} className={`job-offers job-offers${job.featured && `--featured`}`}>
                        <div className="job-offers__info">
                            <figcaption className="job-offers__offer">
                                <img className="job-offers__offer-img" src={require(`../img/${job.companyImg}`)} alt="companyPhoto" />
                                <div className="job-offers__offer-info">
                                    <div className="job-offers__first-info">
                                        <p className="job-offers__company">{job.company}</p>
                                        {job.status.map((status, index) => (
                                            <p key={index} className={`job-offers__${status}`}>{status}</p>
                                        ))}
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
                                    <li key={index} className="job-offers__skills-item"><button value={skill} onClick={handleAddFilter} className="job-offers__skills-btn">{skill}</button></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </main>
            <Footer isLoaded={isLoaded} />
        </>
    );
}

export default Main;