import React, { Fragment, useEffect } from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { STELLER_FRONT_IMAGES_BASE_URL } from '../../config/Config'
import { GetTestmonialAction } from '../../Redux/Actions/HomeAction'

const Testmonial = () => {
    const dispatch = useDispatch<any>()
    const data = useSelector((state: any) => state.GetTestmonialState)
    const picUrl = STELLER_FRONT_IMAGES_BASE_URL

    useEffect(() => {
        dispatch(GetTestmonialAction({}))
    }, [])
    return (
        <>
            {data?.data?.data?.length > 0 ?
                <section id="testmonial" className="section">
                    <div className="container text-center">
                        <h6 className="subtitle">Testmonial</h6>
                        <h6 className="section-title mb-4">What People Say About Me</h6>
                        <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>


                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <ReactOwlCarousel
                                    className='CarouselHome owl-carousel mb-0'
                                    loop={data?.data?.data?.length > 3}
                                    margin={10}
                                    // items={5.5}                                
                                    nav
                                    dots={false}
                                    autoplay
                                    autoplayTimeout={3000}
                                >
                                    <Fragment>
                                        {data?.data?.data.map((datas: any, key: any) => {
                                            // console.log("datasdatas",datas);

                                            const name = datas?.name
                                            const image = datas?.image
                                            const about = datas?.about
                                            const profession = datas?.profession
                                            return (
                                                <>
                                                    <div className="item ">
                                                        <div className="card testmonial-card border">
                                                            <div className="card-body">
                                                                <img src={picUrl + image} alt="" />
                                                                <p>{about}</p>
                                                                <h1 className="title">{name}</h1>
                                                                <h1 className="subtitle">{profession}</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )

                                        })}
                                    </Fragment>
                                </ReactOwlCarousel>


                            </div>
                        </div>
                    </div>
                </section>
                : ""}

        </>
    )
}

export default Testmonial