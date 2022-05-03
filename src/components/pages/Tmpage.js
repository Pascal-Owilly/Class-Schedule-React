import React from "react";
import './Tmpage.css'


const Tmpage = () => {
  return (
    <div>
      <div className="DanielRoot">
        <div className="SilverFlexRow">
          <div className="Text1">PROFILE</div>
        </div>
        <div className="FlexRow">
          <div className="ProfilePicture">
            <div className="Ellipse" src={""} />
          </div>
          <div className="FlexColumn">
            <div className="FlexRow1">
              <div className="NameMacDoe1" width={"auto"}>
                Name: <div className="NameMacDoe">Mac Doe </div>
              </div>
            </div>
            <div className="Element1">
              <div className="FlexColumn1">
                <div className="Text2">mac.doe@moringasch.com</div>
              </div>
              <div>Email:</div>
            </div>
          </div>
          <div className="SilverRectangle">
            <div className="Editprofile"
              src={"https://file.rendit.io/n/ilIh2gCuhFJUEuWXokyr.png"}
            />
            <div className="Text4">Edit Profile</div>
          </div>
          <div className="Settings" src={"https://file.rendit.io/n/VEWM3KSnuAVjWI8LhE7p.png"} />
        </div>
        <div className="FlexRow2">
          <div className="SilverFlexColumn">
            <div className="Text5">Edit Profile Picture</div>
          </div>
          <div className="SilverFlexColumn1">
            <div className="NameMacDoe1" width={"364px"}>Course:</div>
            <div className="Text7">Software Development</div>
          </div>
        </div>
        <div className="SilverFlexRow1">
          <div className="FlexRow3">
            <div className="Element2">
              <div className="Copyright">Copyright 2022 </div>
              <div className="Copyright1">©</div>
            </div>
            <div className="Image1" src={"https://file.rendit.io/n/bCP7zhwtc0PrcXNlR17P.svg"} />
            <div className="Element3">
              <div className="Image2"
                src={"https://file.rendit.io/n/BEpYk0vWLHjFzNTzhTIj.svg"}
              />
              <div className="Image3"
                src={"https://file.rendit.io/n/Ki47RUDhsW7R7DEg13jm.svg"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tmpage;
