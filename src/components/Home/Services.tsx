import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STELLER_FRONT_IMAGES_BASE_URL } from '../../config/Config'
import { GetServicesAction } from '../../Redux/Actions/HomeAction'
import Spinner from '../Layouts/Spinner'

const Services = () => {
    const dispatch = useDispatch<any>()
    const picUrl = STELLER_FRONT_IMAGES_BASE_URL
    const data = useSelector((state: any) => state.GetServicesState)
    // console.log("DATASSSSSSSSSS", data);


    useEffect(() => {
        dispatch(GetServicesAction({}))
    }, [])
    return (
        <>
            {data?.loading ? <Spinner /> : ""}
            <section id="service" className="section">
                <div className="container text-center">
                    <h6 className="subtitle">Service</h6>
                    <h6 className="section-title mb-4">What I Do</h6>
                    <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>

                    <div className="row">
                        {
                            data?.data?.data.map((datas: any, key: any) => {
                                // console.log("datasdatas", datas);

                                const serviceName = datas?.service_name
                                const serviceIcon = datas?.service_icon
                                return (
                                    <>
                                        <div className="col-sm-6 col-md-3 mb-4">
                                            <div className="custom-card card border">
                                                <div className="card-body">
                                                    {/* <i className="icon ti-crown"></i> */}
                                                    <img src={picUrl + serviceIcon} className='icon' alt="" width={"130px"} /> <br />
                                                    <h5>{serviceName}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                        {/* <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                                <div className="card-body">
                                    <i className="icon ti-crown"></i>
                                    <h5>UI/UX Design</h5>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                                <div className="card-body">
                                    <i className="icon ti-desktop"></i>
                                    <h5>Web Design</h5>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                                <div className="card-body">
                                    <i className="icon ti-mobile"></i>
                                    <h5>App Design</h5>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-sm-6 col-md-3 mb-4">
                            <div className="custom-card card border">
                                <div className="card-body">
                                    <i className="icon ti-bar-chart"></i>
                                    <h5>SEO</h5>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services