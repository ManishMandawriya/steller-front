import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STELLER_FRONT_IMAGES_BASE_URL } from '../../config/Config'
import { GetPortfolioAction } from '../../Redux/Actions/HomeAction'
import Spinner from '../Layouts/Spinner'

const Portfolio = () => {
    const dispatch = useDispatch<any>()
    const data = useSelector((state: any) => state.GetPortfolioState)
    const picUrl = STELLER_FRONT_IMAGES_BASE_URL

    useEffect(() => {
        dispatch(GetPortfolioAction({}))
    }, [])
    return (
        <>
            {data?.loading ? <Spinner /> : ""}

            <section id="portfolio" className="section">
                <div className="container text-center">
                    <h6 className="subtitle">Portfolio</h6>
                    <h6 className="section-title mb-4">Check My Wonderful Works</h6>
                    <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>

                    <div className="row">
                        {data?.data?.data?.map((datas: any, key: any) => {
                            const portfolioTitle = datas?.title
                            const portfolioImage = datas?.image
                            const portfolioUrl = datas?.portfolio_link
                            return (
                                <>
                                    <div className="col-sm-4" >
                                        <div className="img-wrapper" key={key}>
                                            <img src={picUrl + portfolioImage} alt="" />
                                            <div className="overlay">
                                                <div className="overlay-infos">
                                                    <h5>{portfolioTitle}</h5>
                                                    <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                                                    <a href="javascript:void(0)"><i className="ti-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })

                        }
                        {/* <div className="col-sm-3">
                            <div className="img-wrapper">
                                <img src="assets/imgs/folio-2.jpg" alt="" />
                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>Project Title</h5>
                                        <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                                        <a href="javascript:void(0)"><i className="ti-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </section>

        </>
    )
}

export default Portfolio