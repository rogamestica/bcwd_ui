import Banner from "../../components/Banner";
import { useState } from "react";
import Picture1 from '../../static/img/Picture1.png';

const Transparency = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <Banner title={"Transparency"} />
      <div className="picture d-flex justify-content-center my-3" >
        <img className="picture" src={Picture1} alt="huy" style={{width: "100%"}}/>
      </div>
    
      <div className="symbol" style={{ textAlign: "left", marginLeft: "30px", marginRight: "10px"}}>
        <h2>Symbolism</h2>
        <p>
          A pearl buried inside a tightly-shut shell is practically worthless.
          Government information is a pearl, meant to be shared with the public
          in order to maximize its inherent value.
        </p>
        <p>
          The Transparency Seal, depicted by a pearl shining out of an open
          shell, is a symbol of a policy shift towards openness in access to
          government information. On the one hand, it hopes to inspire Filipinos
          in the civil service to be more open to citizen engagement; on the
          other, to invite the Filipino citizenry to exercise their right to
          participate in governance.
        </p>
        <p>
          This initiative is envisioned as a step in the right direction towards
          solidifying the position of the Philippines as the Pearl of the Orient
          - a shining example for democratic virtue in the region.
        </p>

        <h3>BCWD's Compliance With Transparency Seal</h3>
        <ul>
          <li onClick={() => handleCategoryClick("Category 1")}>
          DBM APPROVED BUDGET AND TARGETS
            {selectedCategory === "Category 1" && (
              <ul>
                <li onClick={() => handleCategoryClick("Category 1")}>
                 APPROVED BUDGET
                    {selectedCategory === "Category 1" && (
                      <ul>
                         <li onClick={() => handleCategoryClick("Category 1")}>
                            2019
                                {selectedCategory === "Category 1" && (
                                  <ul>
                                    <li><a href="#" target="_blank">2019 Approved Budget</a></li>
                                    <li><a href="#" target="_blank">2019 Re-Aligned Budget</a></li>
                                  </ul>
                                )}
                          </li>
                          <li onClick={() => handleCategoryClick("Category 1")}>
                            2020
                                {selectedCategory === "Category 1" && (
                                  <ul>
                                    <li><a href="#" target="_blank">2020 Approved Budget</a></li>
                                  </ul>
                                )}
                          </li>
                          <li onClick={() => handleCategoryClick("Category 1")}>
                            2021
                                {selectedCategory === "Category 1" && (
                                  <ul>
                                    <li><a href="#" target="_blank">2021 Approved Budget</a></li>
                                  </ul>
                                )}
                          </li>
                      </ul>
                    )}
                </li>
                <li onClick={() => handleCategoryClick("Category 2")}>
                 TARGETS & ACCOMPLISHMENTS
                    {selectedCategory === "Category 2" && (
                      <ul>
                         <li onClick={() => handleCategoryClick("Category 2")}>
                            2019
                                {selectedCategory === "Category 2" && (
                                  <ul>
                                    <li><a href="#" target="_blank">2019 MFO</a></li>
                                    <li><a href="#" target="_blank">2019 Form A</a></li>
                                    <li><a href="#" target="_blank">2019 Form A-1</a></li>
                                  </ul>
                                )}
                          </li>
                          <li onClick={() => handleCategoryClick("Category 2")}>
                            2020
                                {selectedCategory === "Category 2" && (
                                  <ul>
                                    <li><a href="#" target="_blank">2020 Form A And A-1</a></li>
                                    <li><a href="#" target="_blank">2020 Form A With Accomplishments</a></li>
                                    <li><a href="#" target="_blank">2020 Form A-1 With Accomplishments</a></li>
                                  </ul>
                                )}
                          </li>
                          <li onClick={() => handleCategoryClick("Category 2")}>
                            2021
                                {selectedCategory === "Category 2" && (
                                  <ul>
                                    <li><a href="#" target="_blank">2021 Form A And A-1 With Accomplishments 2021</a></li>
                                  </ul>
                                )}
                          </li>
                      </ul>
                    )}
                </li>
                <li>COVID-19 RESPONSE MEASURES</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleCategoryClick("Category 2")}>
          ANNUAL PROCUREMENT PLAN
            {selectedCategory === "Category 2" && (
              <ul>
                <li>2017 APP</li>
                <li> 2018 APP</li>
                <li> 2019 APP</li>
                <li>2020 APP</li>
                <li> 2021 APP</li>
                <li> 2022 APP</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleCategoryClick("Category 3")}>
            MAJOR PROGRAMS, PROJECTS AND ACTIVITIES, BENEFICIARIES, AND STATUS OF IMPLEMENTATION
            {selectedCategory === "Category 3" && (
              <ul>
                 <li onClick={() => handleCategoryClick("Category 3")}>
                    2017
                    {selectedCategory === "Category 3" && (
                      <ul>
                        <li><a href="#" target="_blank">2017 Major Projects (As Of Dec.)</a></li>
                      </ul>
                    )}
                  </li>
                  <li onClick={() => handleCategoryClick("Category 3")}>
                    2018
                    {selectedCategory === "Category 3" && (
                      <ul>
                        <li><a href="#" target="_blank">Major Projects (Production) 2018</a></li>
                        <li><a href="#" target="_blank">Major Projects (Engineering) As Of Dec.</a></li>
                      </ul>
                    )}
                  </li>
                  <li onClick={() => handleCategoryClick("Category 3")}>
                    2019
                    {selectedCategory === "Category 3" && (
                      <ul>
                        <li><a href="#" target="_blank">Major Projects (Engineering) 2019</a></li>
                      </ul>
                    )}
                  </li>
                  <li onClick={() => handleCategoryClick("Category 3")}>
                    2020
                    {selectedCategory === "Category 3" && (
                      <ul>
                        <li><a href="#" target="_blank">2020 Major Projects (Engineering)</a></li>
                      </ul>
                    )}
                  </li>
              </ul>
            )}
          </li>
          <li onClick={() => handleCategoryClick("Category 4")}>
            ANNUAL FINANCIAL REPORTS
              {selectedCategory === "Category 4" && (
                <ul>
                <li onClick={() => handleCategoryClick("Category 4")}>
                      ANNUAL REPORTS
                      {selectedCategory === "Category 4" && (
                        <ul>
                          <li><a href="#" target="_blank">2015 Annual Report</a></li>
                          <li><a href="#" target="_blank">2016 Annual Report</a></li>
                          <li><a href="#" target="_blank">2017 Annual Report</a></li>
                          <li><a href="#" target="_blank">2018 Annual Report</a></li>
                          <li><a href="#" target="_blank">2019 Annual Report</a></li>
                          <li><a href="#" target="_blank">2020 Annual Report</a></li>
                          <li><a href="#" target="_blank">2021 Annual Report</a></li>
                        </ul>
                  )}
                </li>
                <li><a href="#" target="_blank">2019 Financial Statement (As Of Dec. 2019)</a></li>
                <li><a href="#" target="_blank">2020 Financial Statement (As Of Dec. 2020)</a></li>
                <li><a href="#" target="_blank">2021 Financial Statement (As Of Dec. 31, 2021)</a></li>
              </ul>
            )}
          </li>
          <li onClick={() => handleCategoryClick("Category 6")}>
          QMS CERTIFICATION
            {selectedCategory === "Category 6" && (
              <ul>
                <li><a href="#" target="_blank">BCWD QMS Audit Report (Jan. 21, 2021)</a></li>
                <li><a href="#" target="_blank">ISO 9001:2015</a></li>
              </ul>
            )}
          </li>
          <li onClick={() => handleCategoryClick("Category 7")}>
          SYSTEM OF RANKING DELIVERY UNITS
            {selectedCategory === "Category 7" && (
              <ul>
                <li><a href="#" target="_blank">2019 Mechanics In Ranking</a></li>
                <li><a href="#" target="_blank">2020 Mechanics In Ranking</a></li>
                <li><a href="#" target="_blank">2021 Mechanics In Ranking</a></li>
              </ul>
            )}
          </li>
          <li onClick={() => handleCategoryClick("Category 8")}>
          AGENCY REVIEW AND COMPLIANCE PROCEDURE OF STATEMENTS AND FINANCIAL DISCLOSURES
            {selectedCategory === "Category 8" && (
              <ul>
                <li><a href="#" target="_blank">2020 Compliance Procedures In Filing And Submission Of SALN (No Changes)</a></li>
                <li><a href="#" target="_blank">2021 Compliance Procedures In Filing And Submission Of SALN (No Changes)</a></li>
              </ul>
            )}
          </li>
          <li onClick={() => handleCategoryClick("Category 9")}>
          FREEDOM OF INFORMATION
            {selectedCategory === "Category 9" && (
              <ul>
                <li><a href="#" target="_blank">One-Page FOI Manual</a></li>
                <li><a href="#" target="_blank">FOI Reports 2021 (As Of Jan. 31, 2022)</a></li>
                <li><a href="#" target="_blank">BCWD FOI Manual</a></li>
              </ul>
            )}
          </li>
        </ul>

        
        <h3>Other Good Governance Conditions</h3>
        <ul>
          <li onClick={() => handleCategoryClick("Category 10")}>
            CERTIFICATION OF COMPLIANCE
              {selectedCategory === "Category 10" && (
                <ul>
                  <li><a href="#" target="_blank">BCWD Transparency Seal Certification</a></li>
                </ul>
              )}
          </li>
          <li onClick={() => handleCategoryClick("Category 11")}>
            PHILGEPS POSTING
              {selectedCategory === "Category 11" && (
                <ul>
                  <li><a href="#" target="_blank">2015 Certification Of Compliance</a></li>
                  <li><a href="#" target="_blank">2017 Procurement Status</a></li>
                  <li><a href="#" target="_blank">2018 Procurement Monitoring Report</a></li>
                  <li><a href="#" target="_blank">2019 Procurement Monitoring Report As Of 12-31-2019</a></li>
                  <li><a href="#" target="_blank">2020 Philgeps Posting Status</a></li>
                </ul>
              )}
          </li>
          <li onClick={() => handleCategoryClick("Category 12")}>
            PROCUREMENT MONITORING REPORTS
              {selectedCategory === "Category 12" && (
                <ul>
                  <li><a href="#" target="_blank">2016 Summary Of Procurement</a></li>
                  <li><a href="#" target="_blank">2017 Procurement Status</a></li>
                  <li><a href="#" target="_blank">2018 Procurement Monitoring Report</a></li>
                  <li><a href="#" target="_blank">2019 Procurement Monitoring Report As Of 12-31-2019</a></li>
                  <li><a href="#" target="_blank">2020 Philgeps Posting Status</a></li>
                  <li><a href="#" target="_blank">2021 Procurement Monitoring Report</a></li>
                </ul>
              )}
          </li>
          <li onClick={() => handleCategoryClick("Category 13")}>
             ARTA COMPLIANCE 
              {selectedCategory === "Category 13" && (
                <ul>
                  <li><a href="#" target="_blank">2021 CC Certificate Of Compliance</a></li>
                  <li><a href="#" target="_blank">2021 CC Compliance Report</a></li>
                  <li><a href="#" target="_blank">2021 CC Transmittal Letter</a></li>
                  <li><a href="#" target="_blank">BCWD Citizen Charter 2021</a></li>
                  <li><a href="#" target="_blank">2022 CC Certificate Of Compliance</a></li>
                  <li><a href="#" target="_blank">2022 CC Compliance Report</a></li>
                  <li><a href="#" target="_blank">2022 CC Transmittal Letter</a></li>
                  <li><a href="#" target="_blank">2022 BCWD Citizens Charter</a></li>
                  <li><a href="#" target="_blank">2023 CC Certificate Of Compliance</a></li>
                  <li><a href="#" target="_blank">2023 CC Compliance Report</a></li>
                  <li><a href="#" target="_blank">2023 CC Transmittal Letter</a></li>
                  <li><a href="#" target="_blank">2023 BCWD Citizens Charter</a></li>
                </ul>
              )}
          </li>
          <li onClick={() => handleCategoryClick("Category 14")}>
            SALN SUBMISSION/FILING 
              {selectedCategory === "Category 14" && (
                <ul>
                  <li><a href="#" target="_blank">2019 SALN Compliance</a></li>
                  <li><a href="#" target="_blank">2020 SALN Compliance</a></li>
                  <li><a href="#" target="_blank">2020 Compliance Procedures In Filing And Submission Of SALN (No Changes)</a></li>
                  <li><a href="#" target="_blank">2021 Saln Review Committee</a></li>
                  <li><a href="#" target="_blank">2021 SALN Compliance</a></li>
                  <li><a href="#" target="_blank">2021 Compliance Procedures In Filing And Submission Of SALN (No Changes)</a></li>
                </ul>
              )}
          </li>
          <li onClick={() => handleCategoryClick("Category 15")}>
            OFFICE OF THE BOARD OF DIRECTORS 
              {selectedCategory === "Category 15" && (
                <ul>
                  <li><a href="#" target="_blank">Board Solicitation For Education Sector</a></li>
                </ul>
              )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Transparency;
