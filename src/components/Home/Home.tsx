import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STELLER_FRONT_IMAGES_BASE_URL } from '../../config/Config'
import { GetHomeDetailsAction } from '../../Redux/Actions/HomeAction'
import ReactOwlCarousel from 'react-owl-carousel'
import About from './About'
import Spinner from '../Layouts/Spinner'
const Home = () => {

    const dispatch = useDispatch<any>()
    const data = useSelector((state: any) => state.GetHomeDetailsState)
    const picUrl = STELLER_FRONT_IMAGES_BASE_URL


    useEffect(() => {
        dispatch(GetHomeDetailsAction({}))
    }, [])
    return (
        <>
            {data?.loading ? <Spinner /> : ""}
            <header className="header" id="home">
                {data?.data?.data?.length > 0 ?
                    <Fragment>
                        {data?.data?.data?.map((homeData: any, homeKey: any) => {
                            const name = homeData?.name
                            const profession = homeData?.profession
                            const image = homeData?.image


                            return (
                                <>
                                    <div className="container">
                                        <div className="infos">
                                            <h6 className="subtitle">hello,I'm</h6>
                                            <h6 className="title">{name}</h6>
                                            <p>{profession}</p>

                                            <div className="buttons pt-3">
                                                <button className="btn btn-primary rounded">HIRE ME</button>
                                                <button className="btn btn-dark rounded">DOWNLOAD CV</button>
                                            </div>

                                            <div className="socials mt-4">
                                                <a className="social-item" href={homeData?.fb} target="_blank"><i className="ti-facebook"></i></a>
                                                <a className="social-item" href={homeData?.google} target="_blank"><i className="ti-google"></i></a>
                                                <a className="social-item" href={homeData?.instagram} target="_blank"><i className="ti-github"></i></a>
                                                <a className="social-item" href={homeData?.twitter} target="_blank"><i className="ti-twitter"></i></a>
                                            </div>
                                        </div>
                                        <div className="img-holder">
                                            <img src={picUrl + image} alt="" />
                                        </div>
                                    </div>

                                </>
                            )

                        })}
                    </Fragment>
                    : ""}


                <div className="widget">
                    <div className="widget-item">
                        <h2>124</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="widget-item">
                        <h2>456</h2>
                        <p>Project Completed</p>
                    </div>
                    <div className="widget-item">
                        <h2>789</h2>
                        <p>Awards Won</p>
                    </div>
                </div>
            </header>
            <About data={data} />


        </>
    )
}

export default Home