import React from 'react';


var JOB_DESCRIPTIONS = {
    "Accountant":<div>
                    <p>Become a part of any company within the water industry.</p>
                </div>,
    "Biologist":<div>
                    <p>Companies to consider:</p>
                    <ul>
                        <li>BioBot</li>
                        <li>Washington Suburban Sanitary Commission</li>
                        <li>Microvi Biotech</li>
                        <li>Local governments</li>
                        <li>EPA</li>
                    </ul>
                </div>,
    "Business / Marketing":<div>
                                <p>This water industry is in desperate need of careers and talent in business. Marketing skills are essential in bringing the water industry out of the shadows and a topic that no one wants to discuss. The possibilities are unlimited from public relations, </p>
                                <p>Companies to Consider:</p>
                                <ul>        
                                    <li>American Water Works Association</li>
                                    <li>Water Environmental Federation</li>
                                </ul>
                        </div>,
    "Carpenter":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Chemist":<div>
                <p>A chemist in the water industry holds many possibilities. You can work for the government testing the water quality of the treated water to either be discharged into the environment or be supplied to households. This position ensures that your community can stay healthy. Another interesting career opportunity to consider is to monitor our waste. This career path will be only increasing due to COVID-19 as more and more companies like BioBot will emerge and need talented chemists. </p>
                <p>Companies to consider:</p>
                <ul>
                    <li>BioBot</li>
                    <li>Washington Suburban Sanitary Commission</li>
                    <li>Microvi Biotech</li>
                    <li>Environmental Systems Service</li>
                    <li>Local governments</li>
                    <li>EPA</li>
                    <li>Tetra Tech</li>
                    <li>Jacobs</li>
                </ul>
            </div>,
    "Civil Engineer":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Data Scientist":<div>
                        <p>Companies to consider:</p>
                        <ul>
                            <li>BioBot</li>
                            <li>Washington Suburban Sanitary Commission</li>
                            <li>Microvi Biotech</li>
                            <li>Environmental Systems Service</li>
                            <li>Local governments</li>
                        </ul>
                    </div>,
    "Electrical Engineer":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Electrician":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Entrepreneur":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Environmental Scientist":<div>
                                <p>Companies to consider:</p>
                                <ul>
                                    <li>American Water Works Association</li>
                                    <li>Water Environmental Federation</li>
                                </ul>
                            </div>,
    "Equipment Specialist":<div>
                                <p>The range and variety of specialized equipment within the industry is massive.  </p>
                                <p>All manner of mechanical and electrical equipment.Pumps, valves, filters, grinders, crushers, mills,  mixers, granulators, shredders, screens, recycling and purification equipment.</p>
                                <p>Companies to consider:</p>
                                <ul>
                                    <li>Xylem</li>
                                    <li>Westech</li>
                                    <li>MISCO water</li>
                                    <li>PULSCO</li>
                                </ul>
                            </div>,
    "Field Technician":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "GIS Surveyor":<div>
                        <p>This career path gives you options to be your own company for smaller projects, be a part of a survey company or be a part of large construction companies. </p>
                        <p>Companies to consider:</p>
                        <ul>
                            <li>Kiewit</li>
                            <li>Walsh</li>
                            <li>Towill</li>
                            <li>Betchel</li>
                        </ul>
                    </div>,
    "Graphic Designer":<div><p>This career path will not always bring stable income but there are many private companies and government websites that do not present their information in the most effective way. Reaching out to HR representatives is a good way to gather attention. Reaching out to smaller companies first to gain exposure to the water industry is a great way to get to bigger companies that will have stable work. A bachelor degree is not necessary for this career path but is recommended to provide credibility unless you have a separate portfolio to offer potential clients.</p></div>,
    "Human Resources":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "IT Support":<div>
                    <p>Every, Single, Company. Needs. This. Department. There is so much opportunity in this department. Many large companies also have whole departments dedicated to find and test new technologies that can be incorporated in the company. </p>
                    <p>Companies to consider:</p>
                    <ul>
                        <li>Kiewit</li>
                        <li>Walsh</li>
                        <li>Tetra Tech</li>
                        <li>Betchel</li>
                        <li>Brown &amp; Caldwell</li>
                        <li>Jacobs</li>
                    </ul>
                </div>,
    "International Relations":<div>
                                <p>Companies to consider:</p>
                                <ul>
                                    <li>EPA</li>
                                    <li>Department of Energy</li>
                                    <li>UNICEF</li>
                                    <li>Tetra Tech</li>
                                </ul>
                            </div>,
    "Inventor":<div>
                    <p>This can apply to so many subjects but is often overlooked as a viable career path. Research and Development is essential for companies to move forward with changing times. There are many challenges in the water industry that we need inventors like you to tackle pharmaceuticals and microplastics not able to be filtered out in treatment plants.</p> 
                    <p>Companies to consider:</p>
                    <ul>
                        <li>Xylem</li>
                        <li>Westech</li>
                        <li>MISCO water</li>
                        <li>PULSCO</li>
                    </ul>
                </div>,
    "Journalist":<div>
                    <p>Companies to consider:</p>
                    <ul>
                        <li>American Water Works Association</li>
                        <li>Water Environmental Federation</li>
                    </ul>
                </div>,
    "Lawyer":<div>
                <p>As a lawyer, you can do a multitude of careers.</p>
                <ul>
                    <li>Environmental Advocate</li>
                    <li>Construction Companies</li>
                    <li>Government</li>
                    <li>Regulatory Compliance</li>
                    <li>Contract</li>
                </ul>
            </div>,
    "Manager":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Mechanical Engineer":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Pipe Fitter":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Photographer / Videographer":<div>
                                    <p>This career path will not always bring stable income but there are many private companies and government entities that do not present their information in the most effective way. Photos have a way to impact people beyond words. Reaching out to HR representatives is a good way to gather attention. Reaching out to smaller companies first to gain exposure to the water industry is a great way to get to bigger companies that will have stable work. Ideas for times to provide your talents is at the endings of construction projects and unveiling of new products. Photo/Video evidence is also frequently required as proof of regulatory compliance or construction completion, and before/after photos are regularly used to defend against legal claims.</p>
                                </div>,
    "Plumber":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Politician":<div>
                    <p>Government careers offer stable growth and reasonable hours. This area is very important to gain more talent as an industry.</p>
                    <p>Companies to Consider:</p>
                    <ul>
                        <li>Local Government - public works, sanitary division</li>
                        <li>Politician</li>
                        <li>DCLRS</li>
                        <li>Clean Water Action</li>
                        <li>EPA</li>
                        <li>State Government</li>
                    </ul>
                </div>,
    "Researcher":<div>
                    <p>Companies to Consider:</p>
                    <ul>
                        <li>Xylem</li>
                        <li>Westech</li>
                        <li>MISCO water</li>
                        <li>PULSCO</li>
                        <li>Universities</li>
                    </ul>
                </div>,
    "SCADA Technician":<div>
                        <p>Becoming an expert in SCADA technologies will make you a valuable asset to many electrical companies, water treatment equipment companies, and construction companies. This career path can offer you to travel to the different sites potentially internationally or be able to stay in one area if there is a lot of demand. A college degree is not required for this type of work and you will largely work alone or in groups of 2-3 in the field for commissioning a treatment plant.</p>
                        <p>Companies to Consider:</p>
                        <ul>
                            <li>Blocka</li>
                            <li></li>
                        </ul>
                    </div>,
    "Software Engineer":<div>
                            <p>Companies to consider:</p>
                            <ul>
                                <li>American Water Works Association</li>
                                <li>Water Environmental Federation</li>
                            </ul>
                        </div>,
    "Water Treatment Operator":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Web Designer":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    "Welder":<div><p className="text-danger">Apologies. We are still working on this.</p></div>,
    }

export default JOB_DESCRIPTIONS;