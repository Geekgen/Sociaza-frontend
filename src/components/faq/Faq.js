import React from "react";
import '../../style/Faq.css';


function Faq() {
  return (
    <div class="container py-3">
    <div class="row">
        <div class="col-10 mx-auto">
        <p>Here you find some frequently asked questions and answers about Sociaza. <br />
        You are welcome to email your own questions and we'll answer as soon is possible.
        </p>
            <div class="accordion" id="faqExample">
                <div class="card">
                    <div class="card-header p-2" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link question-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              What is Sociaza?
                            </button>
                          </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#faqExample">
                        <div class="card-body">
                            Sociaza is an application to conect Brazilian imigrants in Sweden and help then to share informations, meet people, 
                            making friends, and be up to date with relevant news for the communit.
                            
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingTwo">
                        <h5 class="mb-0">
                        <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          What kind of information can I found in Sociaza?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#faqExample">
                        <div class="card-body">
                            You'll found:
                            <ul>
                                <li>Recipes and tips of food</li>
                                <li>Events</li>
                                <li>News from Brazilian news websites </li>
                                <li>Turism tips</li>
                                <li>Game folks</li>
                           </ul> 
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingSeven">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What kind of event we're talking about?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingSix" data-parent="#faqExample">
                        <div class="card-body">
                            You can organized or participate Pedals ou Hiking trails.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingSeven">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What is Pedals?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingSix" data-parent="#faqExample">
                        <div class="card-body">
                            Pedals is how we call the bicycle meetings. 
                            The event is organized for one member of our community and is possible to check date, hour, and route.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingTwo">
                        <h5 class="mb-0">
                        <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          How can I check for the available events ?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingTwo" data-parent="#faqExample">
                        <div class="card-body">
                            Go to 'Services' tab in the navigation bar and select the service of your choice. It will list the available events. 
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                              Will the attendee be notified when the event gets cancelled ?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingThree" data-parent="#faqExample">
                        <div class="card-body">
                            Yes, the customer will receive the notification over the registered e-mail address
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingFour">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                              How can I check for the exact location of the event ?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseSeven" class="collapse" aria-labelledby="headingFour" data-parent="#faqExample">
                        <div class="card-body">
                            The service provider will reach the attendee and set the exact location after the attendee confirmed participation.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingFive">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                What are the essentials to bring with me ?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseEight" class="collapse" aria-labelledby="headingFive" data-parent="#faqExample">
                        <div class="card-body">
                            Check the event description
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingSix">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Do I need to register to book for an event ?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseNine" class="collapse" aria-labelledby="headingSix" data-parent="#faqExample">
                        <div class="card-body">
                            Yes, registration is must for anyone to check and book for the available events.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingSeven">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                How can I book for an event ?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseTen" class="collapse" aria-labelledby="headingSix" data-parent="#faqExample">
                        <div class="card-body">
                            Select a Service under Services Tab and click on See details. You will be redirected to individual service details page where you can book for an event.
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
   
</div>

  );
}


export default Faq;