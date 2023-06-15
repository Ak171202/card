import "./card.css";

export default function Card(props) {
    return <div className="col-lg-4">
    <div className="container-fluid">

         {/* <div className="row"> */}
            <section class="pricing py-5">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card mb-5 mb-lg-0">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">{props.free}</h5>
                                    <h6 class="card-price text-center">{props.price}<span class="period">/month</span></h6>
                                    <hr />
                                    <ul class="fa-ul">
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.user}</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.stor}</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.proj}</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.access}</li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.size}
                                            </li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.line}
                                            </li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.dom}
                                        </li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.sts}
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