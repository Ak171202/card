import "./card.css";

export default function Card(props) {
    console.log(props)
    return <div className="col-lg-4">
    <div className="container-fluid">

         {/* <div className="row"> */}
            <section class="pricing py-5">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card mb-5 mb-lg-0">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">{props.data.free}</h5>
                                    <h6 class="card-price text-center">{props.data.price}<span class="period">/month</span></h6>
                                    <hr />
                                    <ul class="fa-ul">
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.user}</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.stor}</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.proj}</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.access}</li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.size}
                                            </li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.line}
                                            </li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.dom}
                                        </li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.sts}
                                           </li>
                                    </ul>
                                    <div class="d-grid">
                                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Plus Tier --> */}
                        
                    </div>
                </div>
            </section>

        </div> 
      </div>

}