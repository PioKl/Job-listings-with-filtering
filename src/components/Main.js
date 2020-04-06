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
    //const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState([]);

    //setFilters(filters => [...filters, filter1]);

    const handleAddFilter = (e) => {
        //setFilters([...filters, e.target.value])
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

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/b/5e8884988841e979d0fd84ed/5') //własne utworzenie api poprzez json, gdzie zostały dodane niezbędne dane
            .then(res => {
                console.log(res);
                setData(res.data.jobs);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    /* if (filters.length > 0) { */
    /*     const filterki = data;
        const nowefilterki = filterki.filter(job => {
            return job.skills.includes(filters[0]);
        })
        console.log(nowefilterki)
        console.log(filters) */
    /* } */

    //const filterki = data;
    /*     const tabkaposortowana = filters.map(item => {
            return item;
        }) */
    /*     const nowefilterki = filterki.filter(job => {
            return job.skills.includes(filters);
        }) */
    const dataWithFilter = data.filter(job => {
        //https://stackoverflow.com/questions/54837999/specify-multiple-integers-with-javascript-includes
        return filters.every(filter => job.skills.includes(filter));
    })
    /*     const nowefilterki = filterki.filter(job => {
            return filters.some(el => job.skills.includes(el)); //dziala ale dla OR
        }) */
    console.log(dataWithFilter)
    console.log(filters)
    /*     console.log(filters.join(" && ")) */
    //console.log(tabkaposortowana)

    /*     const status = data.map(job => (
            <p className={`job-offers__${job.status}`}>{job.status}</p>
        )) */
    //console.log(data.map(job => job.status))
    return (
        <main className="main">
            {/* <p>{filters}</p> */}
            {filters.length > 0 && <div className="filters">
                <ul className="filters__list">
                    {filters.map(filter => (
                        <li className="filters__item">{filter}<button value={filter} className="filters__item-remove" onClick={handleRemoveFilter}><img className="filters__remove-img" src={iconRemove} alt="iconRemove" /></button></li>
                    ))}
                </ul>
                <button className="filters__clear" onClick={handleClearFilters}>Clear</button>
                {/*                 <ul className="filters__list">
                    <li className="filters__item">Frontend<button className="filters__item-remove"><img className="filters__remove-img" src={iconRemove} alt="iconRemove" /></button></li>
                    <li className="filters__item">Javascript<button className="filters__item-remove"><img className="filters__remove-img" src={iconRemove} alt="iconRemove" /></button></li>
                    <li className="filters__item">HTML<button className="filters__item-remove"><img className="filters__remove-img" src={iconRemove} alt="iconRemove" /></button></li>
                    <li className="filters__item">CSS<button className="filters__item-remove"><img className="filters__remove-img" src={iconRemove} alt="iconRemove" /></button></li>
                </ul>
                <button className="filters__clear">Clear</button> */}
            </div>}

            {dataWithFilter.map(job => (
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
                                /* <li className="job-offers__skills-item"><button value={skill} onClick={e => setFilter1(e.target.value)} className="job-offers__skills-btn">{skill}</button></li> */
                                <li className="job-offers__skills-item"><button value={skill} onClick={handleAddFilter} className="job-offers__skills-btn">{skill}</button></li>
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