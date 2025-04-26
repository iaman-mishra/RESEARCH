import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div header className="header" style={{ backgroundColor: "rgb(45,125,164)"}}>
      <div
        style={{
          minWidth: "1041px",
          maxWidth: "100%",
          width: "1041px",
          margin: "0px auto",
          padding: "0px",
          border: "0px none rgb(0, 0, 0)",
          outline: "rgb(0, 0, 0) none 0px",
          backgroundColor: "rgb(255, 255, 255)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            padding: "13px 0px 0px",
            margin: "0px",
            border: "0px none rgb(0, 0, 0)",
            outline: "rgb(0, 0, 0) none 0px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              float: "left",
              width: "122px",
              height: "122px",
              overflow: "hidden",
              margin: "0px 0px 0px 16px",
              padding: "0px",
              border: "0px none rgb(0, 0, 0)",
              outline: "rgb(0, 0, 0) none 0px",
              boxSizing: "border-box",
            }}
          >
            {" "}
            <a
              href="https://www.ijaresm.com/"
              title="IJARESM"
              style={{
                color: "rgb(85, 85, 85)",
                textDecoration: "none solid rgb(85, 85, 85)",
                margin: "0px",
                padding: "0px",
                border: "0px none rgb(85, 85, 85)",
                outline: "rgb(85, 85, 85) none 0px",
                boxSizing: "border-box",
              }}
            >
              <img
                src="https://www.ijaresm.com/assets/designer/themes/default/images/logo.jpg"
                alt="IJARESM"
                style={{
                  margin: "0px",
                  padding: "0px",
                  border: "0px none rgb(85, 85, 85)",
                  outline: "rgb(85, 85, 85) none 0px",
                  boxSizing: "border-box",
                }}
              />
            </a>{" "}
          </div>
          <div
            style={{
              float: "left",
              width: "455px",
              textAlign: "center",
              padding: "13px 0px 0px",
              marginLeft: "141px",
              margin: "0px 0px 0px 141px",
              border: "0px none rgb(0, 0, 0)",
              outline: "rgb(0, 0, 0) none 0px",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                fontSize: "30px",
                fontWeight: 700,
                color: "rgb(0, 103, 162)",
                fontFamily: '"Roboto Condensed", sans-serif',
                lineHeight: "34px",
                margin: "0px",
                padding: "0px",
                border: "0px none rgb(0, 103, 162)",
                outline: "rgb(0, 103, 162) none 0px",
                boxSizing: "border-box",
              }}
            >
              International Journal of All Research Education &amp; Scientific Methods
            </p>
            <p
              style={{
                margin: "0px",
                padding: "5px 0px 0px",
                border: "0px none rgb(239, 123, 29)",
                outline: "rgb(239, 123, 29) none 0px",
                paddingTop: "5px",
                color: "rgb(239, 123, 29)",
                fontSize: "17px",
                fontFamily: '"Roboto Condensed", sans-serif',
                boxSizing: "border-box",
              }}
            >
              An ISO Certified Peer-Reviewed Journal
            </p>
          </div>
          <div
            style={{
              width: "187px",
              float: "right",
              padding: "21px 0px 0px 5px",
              margin: "0px",
              border: "0px none rgb(0, 0, 0)",
              outline: "rgb(0, 0, 0) none 0px",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                margin: "0px 0px 5px",
                padding: "0px",
                border: "0px none rgb(239, 123, 29)",
                outline: "rgb(239, 123, 29) none 0px",
                marginBottom: "5px",
                display: "block",
                float: "left",
                textAlign: "center",
                color: "rgb(239, 123, 29)",
                fontSize: "20px",
                fontWeight: 700,
                boxSizing: "border-box",
              }}
            >
              ISSN: 2455-6211
            </p>
            <p
              style={{
                margin: "0px",
                padding: "0px",
                border: "0px none rgb(0, 0, 0)",
                outline: "rgb(0, 0, 0) none 0px",
                clear: "both",
                lineHeight: "0px",
                height: "0px",
                content: '"."',
                display: "block",
                fontSize: "0px",
                boxSizing: "border-box",
              }}
            ></p>
            <div
              style={{
                margin: "0px",
                padding: "0px",
                border: "0px none rgb(0, 0, 0)",
                outline: "rgb(0, 0, 0) none 0px",
                boxSizing: "border-box",
              }}
            >
              <a
                href="https://translateth.is/"
                style={{
                  display: "block",
                  background:
                    'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/language-converter.jpg") no-repeat scroll 0% 0% / auto padding-box border-box',
                  width: "159px !important",
                  height: "27px",
                  color: "rgb(85, 85, 85)",
                  textDecoration: "none solid rgb(85, 85, 85)",
                  margin: "0px",
                  padding: "0px",
                  border: "0px none rgb(85, 85, 85)",
                  outline: "rgb(85, 85, 85) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src="https://www.ijaresm.com/assets/designer/themes/default/images/spacer.gif"
                  alt=""
                  style={{
                    margin: "0px",
                    padding: "0px",
                    border: "0px none rgb(85, 85, 85)",
                    outline: "rgb(85, 85, 85) none 0px",
                    verticalAlign: "middle",
                    boxSizing: "border-box",
                  }}
                />
              </a>
            </div>
            <p
              style={{
                margin: "36px 0px 0px",
                padding: "0px 10px 0px 0px",
                border: "0px none rgb(0, 0, 0)",
                outline: "rgb(0, 0, 0) none 0px",
                paddingRight: "10px",
                marginTop: "36px",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              <a
                href="https://www.facebook.com/IJARESM"
                target="_blank"
                title="Facebook"
                style={{
                  background:
                    "rgb(11, 114, 164) none repeat scroll 0% 0% / auto padding-box border-box",
                  marginRight: "4px",
                  padding: "0px",
                  borderRadius: "50px",
                  width: "29px",
                  height: "29px",
                  display: "inline-block",
                  transition: "0.3s linear",
                  color: "rgb(85, 85, 85)",
                  textDecoration: "none solid rgb(85, 85, 85)",
                  margin: "0px 4px 0px 0px",
                  border: "0px none rgb(85, 85, 85)",
                  outline: "rgb(85, 85, 85) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src="https://www.ijaresm.com/assets/designer/themes/default/images/fb-ico.png"
                  alt=""
                  style={{
                    display: "block",
                    border: "0px none rgb(85, 85, 85)",
                    margin: "0px",
                    padding: "0px",
                    outline: "rgb(85, 85, 85) none 0px",
                    boxSizing: "border-box",
                  }}
                />
              </a>
              <a
                href="https://twitter.com/IJARESMJournal"
                target="_blank"
                title="Twitter"
                style={{
                  background:
                    "rgb(11, 114, 164) none repeat scroll 0% 0% / auto padding-box border-box",
                  marginRight: "4px",
                  padding: "0px",
                  borderRadius: "50px",
                  width: "29px",
                  height: "29px",
                  display: "inline-block",
                  transition: "0.3s linear",
                  color: "rgb(85, 85, 85)",
                  textDecoration: "none solid rgb(85, 85, 85)",
                  margin: "0px 4px 0px 0px",
                  border: "0px none rgb(85, 85, 85)",
                  outline: "rgb(85, 85, 85) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src="https://www.ijaresm.com/assets/designer/themes/default/images/tw-ico.png"
                  alt=""
                  style={{
                    display: "block",
                    border: "0px none rgb(85, 85, 85)",
                    margin: "0px",
                    padding: "0px",
                    outline: "rgb(85, 85, 85) none 0px",
                    boxSizing: "border-box",
                  }}
                />
              </a>
              <a
                href="https://in.linkedin.com/pub/ijaresm-publication/a6/321/416/"
                target="_blank"
                title="Linked In"
                style={{
                  background:
                    "rgb(11, 114, 164) none repeat scroll 0% 0% / auto padding-box border-box",
                  marginRight: "4px",
                  padding: "0px",
                  borderRadius: "50px",
                  width: "29px",
                  height: "29px",
                  display: "inline-block",
                  transition: "0.3s linear",
                  color: "rgb(85, 85, 85)",
                  textDecoration: "none solid rgb(85, 85, 85)",
                  margin: "0px 4px 0px 0px",
                  border: "0px none rgb(85, 85, 85)",
                  outline: "rgb(85, 85, 85) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src="https://www.ijaresm.com/assets/designer/themes/default/images/in-ico.png"
                  alt=""
                  style={{
                    display: "block",
                    border: "0px none rgb(85, 85, 85)",
                    margin: "0px",
                    padding: "0px",
                    outline: "rgb(85, 85, 85) none 0px",
                    boxSizing: "border-box",
                  }}
                />
              </a>
            </p>
          </div>
          <div
            style={{
              margin: "0px",
              padding: "0px",
              border: "0px none rgb(0, 0, 0)",
              outline: "rgb(0, 0, 0) none 0px",
              clear: "both",
              lineHeight: "0px",
              height: "0px",
              boxSizing: "border-box",
            }}
          ></div>
        </div>
        {/* #EndLibraryItem */}
        {/* Top-header Ends*/}
        <div
          style={{
            marginTop: "13px",
            background: "rgb(45, 125, 164) none repeat scroll 0% 0% / auto padding-box border-box",
            padding: "8px 7px 7px 8px",
            border: "0px none rgb(0, 0, 0)",
            outline: "rgb(0, 0, 0) none 0px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              float: "right",
              background:
                "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box",
              borderRadius: "10px",
              padding: "3px 4px",
              width: "203px",
              textAlign: "center",
              marginRight: "8px",
              margin: "0px 8px 0px 0px",
              border: "0px none rgb(0, 0, 0)",
              outline: "rgb(0, 0, 0) none 0px",
              boxSizing: "border-box",
            }}
          >
            <form
              action="https://www.ijaresm.com/search"
              accept-charset="utf-8"
              name="frm11"
              method="get"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                padding: "0px",
                outline: "rgb(0, 0, 0) none 0px",
              }}
            >
              <p
                style={{
                  width: "28px",
                  height: "26px",
                  backgroundColor: "rgb(229, 166, 45)",
                  float: "right",
                  borderRadius: "10px",
                  paddingTop: "5px",
                  margin: "0px",
                  padding: "5px 0px 0px",
                  border: "0px none rgb(0, 0, 0)",
                  outline: "rgb(0, 0, 0) none 0px",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <input
                  src="https://www.ijaresm.com/assets/designer/themes/default/images/search-btn.png"
                  type="image"
                  alt="Search"
                  style={{
                    margin: "0px",
                    padding: "0px",
                    border: "0px none rgb(85, 85, 85)",
                    outline: "rgb(85, 85, 85) none 0px",
                    font: '14px / 18px "Open Sans", Arial, Helvetica, sans-serif',
                    color: "rgb(85, 85, 85)",
                    boxSizing: "border-box",
                  }}
                />
              </p>
              <p
                style={{
                  margin: "0px",
                  padding: "0px",
                  border: "0px none rgb(0, 0, 0)",
                  outline: "rgb(0, 0, 0) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <input
                  name="keyword2"
                  type="text"
                  placeholder="Search here"
                  style={{
                    padding: "3px",
                    border: "0px none rgb(0, 0, 0)",
                    color: "rgb(0, 0, 0)",
                    width: "160px",
                    margin: "0px",
                    outline: "rgb(0, 0, 0) none 0px",
                    font: '14px / 18px "Open Sans", Arial, Helvetica, sans-serif',
                    background:
                      "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box",
                    boxSizing: "border-box",
                  }}
                />
              </p>
            </form>
          </div>
          <nav
            style={{
              display: "block",
              float: "left",
              width: "810px",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              outline: "rgb(0, 0, 0) none 0px",
            }}
          >
            <ul
              style={{
                width: "100%",
                padding: "0px",
                margin: "0px",
                listStyle: "outside none none",
                font: '15px / 27px "Roboto Condensed", sans-serif',
                color: "rgb(34, 34, 34)",
                border: "0px none rgb(34, 34, 34)",
                outline: "rgb(34, 34, 34) none 0px",
                boxSizing: "border-box",
              }}
            >
              <li
                style={{
                  padding: "0px",
                  margin: "0px",
                  listStyle: "outside none none",
                  float: "left",
                  position: "relative",
                  border: "0px none rgb(34, 34, 34)",
                  outline: "rgb(34, 34, 34) none 0px",
                  boxSizing: "border-box",
                }}
                
                onH
              >
                <a
                  href="https://www.ijaresm.com/"
                  title="Home"
                  style={{
                    transition: "0.6s linear",
                    textTransform: "uppercase",
                    marginRight: "1px",
                    letterSpacing: "0.1px",
                    display: "inline-block",
                    color: "rgb(255, 255, 255)",
                    padding: "2px 12px 0px 13px",
                    textDecoration: "none solid rgb(255, 255, 255)",
                    margin: "0px 1px 0px 0px",
                    border: "0px none rgb(255, 255, 255)",
                    outline: "rgb(255, 255, 255) none 0px",
                    boxSizing: "border-box",
                  }}
                  className="hover:bg-orange-500 hover:text-white rounded-md"
                >
                  Home
                </a>
              </li>
              <li
                style={{
                  padding: "0px",
                  margin: "0px",
                  listStyle: "outside none none",
                  float: "left",
                  position: "relative",
                  border: "0px none rgb(34, 34, 34)",
                  outline: "rgb(34, 34, 34) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <a
                  href="https://www.ijaresm.com/editorial-board"
                  title="Editorial Board"
                  style={{
                    transition: "0.6s linear",
                    textTransform: "uppercase",
                    marginRight: "1px",
                    letterSpacing: "0.1px",
                    display: "inline-block",
                    color: "rgb(255, 255, 255)",
                    padding: "2px 12px 0px 13px",
                    textDecoration: "none solid rgb(255, 255, 255)",
                    margin: "0px 1px 0px 0px",
                    border: "0px none rgb(255, 255, 255)",
                    outline: "rgb(255, 255, 255) none 0px",
                    boxSizing: "border-box",
                  }}
                  className="hover:bg-orange-500 hover:text-white rounded-md"

                >
                  Editorial Board
                </a>
              </li>
              <li
                style={{
                  padding: "0px",
                  margin: "0px",
                  listStyle: "outside none none",
                  float: "left",
                  position: "relative",
                  border: "0px none rgb(34, 34, 34)",
                  outline: "rgb(34, 34, 34) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <a
                  href="https://www.ijaresm.com/processing-charges"
                  title="Processing Charges"
                  style={{
                    transition: "0.6s linear",
                    textTransform: "uppercase",
                    marginRight: "1px",
                    letterSpacing: "0.1px",
                    display: "inline-block",
                    color: "rgb(255, 255, 255)",
                    padding: "2px 12px 0px 13px",
                    textDecoration: "none solid rgb(255, 255, 255)",
                    margin: "0px 1px 0px 0px",
                    border: "0px none rgb(255, 255, 255)",
                    outline: "rgb(255, 255, 255) none 0px",
                    boxSizing: "border-box",
                  }}
                  className="hover:bg-orange-500 hover:text-white rounded-md"

                >
                  Processing Charges
                </a>
              </li>
              <li
                style={{
                  padding: "0px",
                  margin: "0px",
                  listStyle: "outside none none",
                  float: "left",
                  position: "relative",
                  border: "0px none rgb(34, 34, 34)",
                  outline: "rgb(34, 34, 34) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <a
                  href="https://www.ijaresm.com/online-submission"
                  title="Online Submission"
                  style={{
                    transition: "0.6s linear",
                    textTransform: "uppercase",
                    marginRight: "1px",
                    letterSpacing: "0.1px",
                    display: "inline-block",
                    color: "rgb(255, 255, 255)",
                    padding: "2px 12px 0px 13px",
                    textDecoration: "none solid rgb(255, 255, 255)",
                    margin: "0px 1px 0px 0px",
                    border: "0px none rgb(255, 255, 255)",
                    outline: "rgb(255, 255, 255) none 0px",
                    boxSizing: "border-box",
                  }}
                  className="hover:bg-orange-500 hover:text-white rounded-md"

                >
                  Online Submission
                </a>
              </li>
              <li
                style={{
                  padding: "0px",
                  margin: "0px",
                  listStyle: "outside none none",
                  float: "left",
                  position: "relative",
                  border: "0px none rgb(34, 34, 34)",
                  outline: "rgb(34, 34, 34) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <NavLink
                  to="/volume-13/issue-4-april-2025"
                  title="Issues"
                  style={{
                    color: "rgb(255, 255, 255)",
                    // background:
                    //   "rgb(239, 123, 29) none repeat scroll 0% 0% / auto padding-box border-box",
                    borderRadius: "5px",
                    transition: "0.6s linear",
                    textTransform: "uppercase",
                    marginRight: "1px",
                    letterSpacing: "0.1px",
                    display: "inline-block",
                    padding: "2px 12px 0px 13px",
                    textDecoration: "none solid rgb(255, 255, 255)",
                    margin: "0px 1px 0px 0px",
                    border: "0px none rgb(255, 255, 255)",
                    outline: "rgb(255, 255, 255) none 0px",
                    boxSizing: "border-box",
                    
                  }
                }
                className="hover:bg-orange-500 hover:text-white rounded-md"
                >
                  Issues
                </NavLink>
                <div
                  style={{
                    display: "none",
                    width: "180px",
                    position: "absolute",
                    borderRadius: "0px 0px 5px 5px",
                    background:
                      "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                    padding: "0% 0% 5%",
                    zIndex: 999999999,
                    margin: "0px",
                    border: "0px none rgb(34, 34, 34)",
                    outline: "rgb(34, 34, 34) none 0px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-13"
                      title="Volume 13"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 13
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-13/issue-1-january-2025"
                        title="Issue 1, January 2025"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1, January 2025
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-13/issue-2-february-2025"
                        title="Issue 2, February 2025"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2, February 2025
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-13/issue-3-march-2025"
                        title="Issue 3, March 2025"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3, March 2025
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-13/issue-4-april-2025"
                        title="Issue 4, April 2025"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4, April 2025
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-12"
                      title="Volume 12"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 12
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-1-january-2024"
                        title="Issue 1 (January 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1 (January 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-2"
                        title="Issue 2 (February 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2 (February 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-3-march-2024"
                        title="Issue 3 (March 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3 (March 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-4-april-2024"
                        title="Issue 4 (April 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4 (April 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-5"
                        title="Issue 5 (May 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5 (May 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-6-june-2024"
                        title="Issue 6 (June 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6 (June 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-7-july-2024"
                        title="Issue 7 (July 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7 (July 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-8-august-2024"
                        title="Issue 8 (August 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8 (August 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-9-september-2024"
                        title="Issue 9 (September 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9 (September 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-10-october-2024"
                        title="Issue 10 (October 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10 (October 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-11-november-2024"
                        title="Issue 11 (November 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11 (November 2024)
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-12/issue-12-december-2024"
                        title="Issue 12 (December 2024)"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12 (December 2024)
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-11"
                      title="Volume 11"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 11
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-1"
                        title="Issue 1"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/volume-11"
                        title="Issue 2"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-3"
                        title="Issue 3"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-4"
                        title="Issue 4"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-5"
                        title="Issue 5"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-5/2023"
                        title="Issue 5."
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5.
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-6"
                        title="Issue 6"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-7"
                        title="Issue 7"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-8"
                        title="Issue 8"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-9"
                        title="Issue 9"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-10"
                        title="Issue 10"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-11"
                        title="Issue 11"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-11/issue-12"
                        title="Issue 12"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-10"
                      title="Volume 10"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 10
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-1"
                        title="Issue 1, January 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1, January 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-2"
                        title="Issue 2, February 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2, February 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-3"
                        title="Issue 3, March 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3, March 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-4"
                        title="Issue 4, April 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4, April 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-5"
                        title="Issue 5, May 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5, May 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-6-june-2022"
                        title="Issue 6, June 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6, June 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-7-july-2022"
                        title="Issue 7, July 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7, July 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-8-august-2022"
                        title="Issue 8, August 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8, August 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-9-september-2022"
                        title="Issue 9, September 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9, September 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-9-sept-2022"
                        title="Issue 9, September-2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9, September-2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-10-october-2022"
                        title="Issue 10, October 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10, October 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-10-november-2022"
                        title="Issue 11, November 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11, November 2022
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-10/issue-12-december-2022"
                        title="Issue 12, December 2022"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12, December 2022
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-9-1"
                      title="Volume 9"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 9
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-9-issue-1-january-2021"
                        title="Issue 1, January 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1, January 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9-1/issue-2-february-2021"
                        title="Issue 2,February 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2,February 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9-1/issue-3-march-2021"
                        title="Issue 3,March 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3,March 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9-1/volume-9-issue-4-april-2021"
                        title="Issue 4,April 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4,April 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9/issue-5-may-2021"
                        title="Issue 5, May 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5, May 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9-1/issue-6-june-2021"
                        title="Issue 6, June 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6, June 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9-1/issue-7"
                        title="Issue 7, July 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7, July 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9-1/issue-8-august-2021"
                        title="Issue 8, August 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8, August 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9-1/issue-9-september-2021"
                        title="Issue 9, September 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9, September 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9-1/issue-10-october-2021"
                        title="Issue 10, October 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10, October 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9-1/issue-11-november-2021"
                        title="Issue 11, November 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11, November 2021
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-9-1/issue-12-december-2021"
                        title="Issue 12, December 2021"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12, December 2021
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-8"
                      title="Volume 8"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 8
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-6-july-2020"
                        title="Issue 7, July 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7, July 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-1"
                        title="Issue 1, January 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1, January 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-2"
                        title="Issue 2, February 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2, February 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-3"
                        title="Issue 3, March 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3, March 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-4"
                        title="Issue 4, April 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4, April 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-5-may-2020"
                        title="Issue 5, May 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5, May 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-6-june-2020"
                        title="Issue 6, June 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6, June 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-8-august-2020"
                        title="Issue 8, August 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8, August 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-9"
                        title="Issue 9, September 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9, September 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-10-october-2020"
                        title="Issue 10, October 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10, October 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-11-november-2020"
                        title="Issue 11, November 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11, November 2020
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-8/issue-12-december-2020"
                        title="Issue 12, December 2020"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12, December 2020
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-7"
                      title="Volume 7"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 7
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-1"
                        title="Issue 1"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-2"
                        title="Issue 2"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-3"
                        title="Issue 3"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-4"
                        title="Issue 4"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-5"
                        title="Issue 5"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-6"
                        title="Issue 6"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-7"
                        title="Issue 7"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-8"
                        title="Issue 8"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-9"
                        title="Issue 9"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-10"
                        title="Issue 10"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-11"
                        title="Issue 11"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-7/issue-12"
                        title="Issue 12"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-6"
                      title="Volume 6"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 6
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-1"
                        title="Issue 1"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-2"
                        title="Issue 2"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-3"
                        title="Issue 3"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-4"
                        title="Issue 4"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-5-0"
                        title="Issue 5"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-6"
                        title="Issue 6"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-7"
                        title="Issue 7"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-8"
                        title="Issue 8"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-9"
                        title="Issue 9"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-10"
                        title="Issue 10"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-11"
                        title="Issue 11"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-6/issue-12"
                        title="Issue 12"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-5"
                      title="Volume 5"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 5
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-1"
                        title="Issue 1"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-2"
                        title="Issue 2"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-3"
                        title="Issue 3"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-4"
                        title="Issue 4"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-5"
                        title="Issue 5"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-6"
                        title="Issue 6"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-7"
                        title="Issue 7"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-8"
                        title="Issue 8"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-9"
                        title="Issue 9"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-10"
                        title="Issue 10"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-11"
                        title="Issue 11"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-5/issue-12"
                        title="Issue 12"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-4"
                      title="Volume 4"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 4
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-12"
                        title="Issue 12"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-11"
                        title="Issue 11"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-10"
                        title="Issue 10"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-9"
                        title="Issue 9"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-8"
                        title="Issue 8"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-7"
                        title="Issue 7"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-6"
                        title="Issue 6"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-5"
                        title="Issue 5"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-4"
                        title="Issue 4"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-3"
                        title="Issue 3"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-2"
                        title="Issue 2"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-4/issue-1"
                        title="Issue 1"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-3"
                      title="Volume 3"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 3
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-12"
                        title="Issue 12"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-11"
                        title="Issue 11"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-10"
                        title="Issue 10"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-9"
                        title="Issue 9"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-8"
                        title="Issue 8"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-7"
                        title="Issue 7"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-6"
                        title="Issue 6"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-5"
                        title="Issue 5"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-4"
                        title="Issue 4"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-3"
                        title="Issue 3"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-2"
                        title="Issue 2"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-3/issue-1"
                        title="Issue 1"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-2"
                      title="Volume 2"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 2
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-12"
                        title="Issue 12"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 12
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-11"
                        title="Issue 11"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 11
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-10"
                        title="Issue 10"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 10
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-9"
                        title="Issue 9"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 9
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-8"
                        title="Issue 8"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 8
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-7"
                        title="Issue 7"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 7
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-6"
                        title="Issue 6"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 6
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-5"
                        title="Issue 5"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 5
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-4"
                        title="Issue 4"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 4
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-3"
                        title="Issue 3"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 3
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-2"
                        title="Issue 2"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 2
                      </a>{" "}
                      <a
                        href="https://www.ijaresm.com/volume-2/issue-1"
                        title="Issue 1"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      position: "static",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "0px 0px 5px 5px",
                      background:
                        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                      width: "195px",
                      zIndex: 999999999,
                      margin: "0px",
                      border: "0px none rgb(34, 34, 34)",
                      outline: "rgb(34, 34, 34) none 0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <a
                      href="https://www.ijaresm.com/volume-1"
                      title="Volume 1"
                      style={{
                        background:
                          'rgba(0, 0, 0, 0) url("https://www.ijaresm.com/images/bltx.png") no-repeat scroll 97% 11px / auto padding-box border-box',
                        textAlign: "left",
                        color: "rgb(255, 255, 255)",
                        textTransform: "capitalize",
                        borderBottom: "0.8px solid rgb(255, 255, 255)",
                        display: "block",
                        padding: "3px 10px",
                        lineHeight: "22px",
                        fontSize: "13px",
                        transition: "0.6s linear",
                        marginRight: "1px",
                        letterSpacing: "0.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        margin: "0px 1px 0px 0px",
                        border: "0px",
                        outline: "rgb(255, 255, 255) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      Volume 1
                    </a>
                    <div
                      style={{
                        marginLeft: "194px",
                        marginTop: "-27px",
                        width: "180px",
                        display: "none",
                        position: "absolute",
                        borderRadius: "0px 0px 5px 5px",
                        background:
                          "rgba(239, 123, 29, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                        padding: "0% 0% 5%",
                        zIndex: 999999999,
                        border: "0px none rgb(34, 34, 34)",
                        outline: "rgb(34, 34, 34) none 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <a
                        href="https://www.ijaresm.com/volume-1/issue-1"
                        title="Issue 1"
                        style={{
                          textAlign: "left",
                          color: "rgb(255, 255, 255)",
                          textTransform: "capitalize",
                          borderBottom: "0.8px solid rgb(255, 255, 255)",
                          display: "block",
                          padding: "3px 10px",
                          lineHeight: "22px",
                          fontSize: "13px",
                          transition: "0.6s linear",
                          marginRight: "1px",
                          letterSpacing: "0.1px",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          margin: "0px 1px 0px 0px",
                          border: "0px",
                          outline: "rgb(255, 255, 255) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        Issue 1
                      </a>
                    </div>
                  </div>
                  {/**/}
                </div>
              </li>
              <li
                style={{
                  padding: "0px",
                  margin: "0px",
                  listStyle: "outside none none",
                  float: "left",
                  position: "relative",
                  border: "0px none rgb(34, 34, 34)",
                  outline: "rgb(34, 34, 34) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <a
                  href="https://www.ijaresm.com/indexing"
                  title="Indexing"
                  style={{
                    transition: "0.6s linear",
                    textTransform: "uppercase",
                    marginRight: "1px",
                    letterSpacing: "0.1px",
                    display: "inline-block",
                    color: "rgb(255, 255, 255)",
                    padding: "2px 12px 0px 13px",
                    textDecoration: "none solid rgb(255, 255, 255)",
                    margin: "0px 1px 0px 0px",
                    border: "0px none rgb(255, 255, 255)",
                    outline: "rgb(255, 255, 255) none 0px",
                    boxSizing: "border-box",
                  }}
                  className="hover:bg-orange-500 hover:text-white rounded-md"

                >
                  Indexing
                </a>
              </li>
              <li
                style={{
                  padding: "0px",
                  margin: "0px",
                  listStyle: "outside none none",
                  float: "left",
                  position: "relative",
                  border: "0px none rgb(34, 34, 34)",
                  outline: "rgb(34, 34, 34) none 0px",
                  boxSizing: "border-box",
                }}
              >
                <a
                  href="https://www.ijaresm.com/contactus"
                  title="Contact Us"
                  style={{
                    transition: "0.6s linear",
                    textTransform: "uppercase",
                    marginRight: "1px",
                    letterSpacing: "0.1px",
                    display: "inline-block",
                    color: "rgb(255, 255, 255)",
                    padding: "2px 12px 0px 13px",
                    textDecoration: "none solid rgb(255, 255, 255)",
                    margin: "0px 1px 0px 0px",
                    border: "0px none rgb(255, 255, 255)",
                    outline: "rgb(255, 255, 255) none 0px",
                    boxSizing: "border-box",
                  }}
                  className="hover:bg-orange-500 hover:text-white rounded-md"

                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div
            style={{
              margin: "0px",
              padding: "0px",
              border: "0px none rgb(0, 0, 0)",
              outline: "rgb(0, 0, 0) none 0px",
              clear: "both",
              lineHeight: "0px",
              height: "0px",
              boxSizing: "border-box",
            }}
          ></div>
        </div>
        <div
          style={{
            margin: "0px",
            padding: "0px",
            border: "0px none rgb(0, 0, 0)",
            outline: "rgb(0, 0, 0) none 0px",
            clear: "both",
            lineHeight: "0px",
            height: "0px",
            boxSizing: "border-box",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
