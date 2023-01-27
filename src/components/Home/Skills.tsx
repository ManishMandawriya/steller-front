import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSkillsAction } from '../../Redux/Actions/HomeAction'
import Spinner from '../Layouts/Spinner'

const Skills = () => {
    const dispatch = useDispatch<any>()
    const data = useSelector((state: any) => state.GetSkillsState)


    useEffect(() => {
        dispatch(GetSkillsAction({}))
    }, [])
    return (
        <>
            {data?.loading ? <Spinner /> : ""}
            <section className="section">
                <div className="container text-center">
                    <h6 className="subtitle">Skills</h6>
                    <h6 className="section-title mb-4">Why Choose me</h6>
                    <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>

                    <div className="row text-left">
                        {data?.data?.data.map((datas: any, skills: any) => {
                            // console.log("datadatadata", datas);
                            const skillsName = datas?.skills
                            const skillsPerfection = datas?.prefection

                            return (
                                <>
                                    <div className="col-sm-6" key={skills}>
                                        <h6 className="mb-3">{skillsName}</h6>
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${skillsPerfection}` }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>{skillsPerfection}</span></div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills