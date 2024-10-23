import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';



const Job = ({ job }) => {
    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#a1a7d3]'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#a1a7d3]'>{job_type}</button>
                </div>
                <div className='mt-4 flex'>
                    <h2 className='flex mr-4'>
                        <IoLocationSharp className='text-2xl' /> {location}
                    </h2>
                    <h2 className='flex'><AiFillDollarCircle className='text-2xl' />{salary}
                    </h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;