import React from 'react'
import { STELLER_FRONT_IMAGES_BASE_URL } from '../../config/Config'

const About = (props: any) => {
    const homeData = props?.data?.data
    const picUrl = STELLER_FRONT_IMAGES_BASE_URL

    return (
        <>
            <section id="about" className="section mt-3">
                <div className="container mt-5">
                    {homeData?.data.map((data: any, key: any) => {
                        // console.log("datadatadata", data);
                        const name = data?.name
                        const about = data?.about
                        const profession = data?.profession
                        const image = data?.image

                        return (
                            <>
                                <div className="row text-center text-md-left">
                                    <div className="col-md-3">
                                        <img src={picUrl + image} alt="" className="img-thumbnail mb-4" />
                                    </div>
                                    <div className="pl-md-4 col-md-9">
                                        <h6 className="title">{name}</h6>
                                        <p className="subtitle">{profession}</p>
                                        <p>{about}</p>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.</p> */}
                                        <button className="btn btn-primary rounded mt-3">DOWNLOAD CV</button>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </section>
        </>
    )
}

export default About