import React from "react";
import { Link } from "react-router-dom";
import { Hidden, Box } from '@mui/material';
import { motion,
} from 'framer-motion'

//layout
import TopBar2 from './layout/TopBar2';
import TopBar2SM from './layout/TopBar2SM';
import FooterLG from "./layout/FooterLG";
import FooterSM from "./layout/FooterSM";
import FooterMD from "./layout/FooterMD";

//img
import Today1 from "../assets/img/List/today1.png";
import Today2 from "../assets/img/List/today2.png";
import Today3 from "../assets/img/List/today3.png";
import Novel1 from "../assets/img/List/novel1.png";
import Novel2 from "../assets/img/List/novel2.png";
import Novel3 from "../assets/img/List/novel3.png";
import Novel4 from "../assets/img/List/novel4.png";
import Novel5 from "../assets/img/List/novel5.png";
import Novel6 from "../assets/img/List/novel6.png";
import Novel7 from "../assets/img/List/novel7.png";
import Novel8 from "../assets/img/List/novel8.png";
import Novel9 from "../assets/img/List/novel9.png";
import Relation1 from "../assets/img/List/relation1.png";
import Relation2 from "../assets/img/List/relation2.png";
import Relation3 from "../assets/img/List/relation3.png";
import Relation4 from "../assets/img/List/relation4.png";
import Relation5 from "../assets/img/List/relation5.png";
import Mind1 from "../assets/img/List/mind1.png";
import Mind2 from "../assets/img/List/mind2.png";
import Mind3 from "../assets/img/List/mind3.png";


function List() {
    return (
        <div>
          <div className="list-section1-bg">
            <Box className='list-section1'>
              <p className="list-section1-title">오늘의 책</p>
              <div className="list-section1-con">
                <motion.div
                  initial={{ opacity: 0, 
                      x: -40
                  }}
                  whileInView={{ opacity: 1,
                      x: 0,
                      transition: {
                      type: "spring",
                      duration: 2,
                      }
                  }}
                >
                  <Link to="novel1" >
                    <img className="list-section1-con-img" src={Today1} alt='해와 달'/>
                    <p>1위</p>
                    <p>해와 달</p>
                  </Link>
                </motion.div>
                <div style={{width: '100px'}}/>
                <motion.div
                  initial={{ opacity: 0, 
                      x: -40
                  }}
                  whileInView={{ opacity: 1,
                      x: 0,
                      transition: {
                      type: "spring",
                      duration: 2,
                      delay: 0.25,
                      }
                  }}
                >
                  <Link to="relation2">
                    <img className="list-section1-con-img" src={Today2} alt='해와 달'/>
                    <p>2위</p>
                    <p>돈과 사람</p>
                  </Link>
                </motion.div>
                <div style={{width: '100px'}}/>
                <motion.div
                  initial={{ opacity: 0, 
                      x: -40
                  }}
                  whileInView={{ opacity: 1,
                      x: 0,
                      transition: {
                      type: "spring",
                      duration: 2,
                      delay: 0.5,
                      }
                  }}
                >
                  <Link to="novel3">
                    <img className="list-section1-con-img" src={Today3} alt='해와 달'/>
                    <p>3위</p>
                    <p>픽셀전쟁</p>
                  </Link>
                </motion.div>
              </div>
            </Box>
          </div>
          <Box className='list-section list-section2'>
            <p className="list-section2-title">장르별 책</p>
            <div className="list-section2-con">
              <p>소설</p>
              <Box>
                <Link to='novel1'>
                  <div>
                    <img src={Novel1} alt='해와 달'/>
                  </div>
                  <div>
                    <p>해와 달</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='novel2'>
                  <div>
                    <img src={Novel2} alt='무적'/>
                  </div>
                  <div>
                    <p>무적</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='novel3'>
                  <div>
                    <img src={Novel3} alt='픽셀전쟁'/>
                  </div>
                  <div>
                    <p>픽셀전쟁</p>
                    <p>최원호</p>
                  </div>
                </Link>
              </Box>
              <Box>
                <Link to='novel4'>
                  <div>
                    <img src={Novel4} alt='그림자'/>
                  </div>
                  <div>
                    <p>그림자</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='novel5'>
                  <div>
                    <img src={Novel5} alt='왕의 전쟁'/>
                  </div>
                  <div>
                    <p>왕의 전쟁</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='novel6'>
                  <div>
                    <img src={Novel6} alt='신발을 부탁해'/>
                  </div>
                  <div>
                    <p>신발을 부탁해</p>
                    <p>최원호</p>
                  </div>
                </Link>
              </Box>
              <Box>
                <Link to='novel7'>
                  <div>
                    <img src={Novel7} alt='세계최강'/>
                  </div>
                  <div>
                    <p>세계최강</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='novel8'>
                  <div>
                    <img src={Novel8} alt='워노화신'/>
                  </div>
                  <div>
                    <p>워노화신</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='novel9'>
                  <div>
                    <img src={Novel9} alt='모니터 안의 세상'/>
                  </div>
                  <div>
                    <p>모니터 안의 세상</p>
                    <p>최원호</p>
                  </div>
                </Link>
              </Box>
            </div>
            <div className="list-section2-con">
              <p>인간관계</p>
              <Box>
                <Link to='relation1'>
                  <div>
                    <img src={Relation1} alt='소셜 다이빙'/>
                  </div>
                  <div>
                    <p>소셜 다이빙</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='relation2'>
                  <div>
                    <img src={Relation2} alt='돈과 사람'/>
                  </div>
                  <div>
                    <p>돈과 사람</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='relation3'>
                  <div>
                    <img src={Relation3} alt='꼰대중독'/>
                  </div>
                  <div>
                    <p>꼰대중독</p>
                    <p>최원호</p>
                  </div>
                </Link>
              </Box>
              <Box>
                <Link to='relation4'>
                  <div>
                    <img src={Relation4} alt='그 상사의 사정'/>
                  </div>
                  <div>
                    <p>그 상사의 사정</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='relation5'>
                  <div>
                    <img src={Relation5} alt='요즘 것들을 이해하는 법'/>
                  </div>
                  <div>
                    <p>요즘 것들을 이해하는 법</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <div style={{ width: '33%'}}/>
              </Box>
            </div>
            <div className="list-section2-con">
              <p>심리학</p>
              <Box>
                <Link to='mind1'>
                  <div>
                    <img src={Mind1} alt='마음의 평화'/>
                  </div>
                  <div>
                    <p>마음의 평화</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='mind2'>
                  <div>
                    <img src={Mind2} alt='원호심리학'/>
                  </div>
                  <div>
                    <p>원호심리학</p>
                    <p>최원호</p>
                  </div>
                </Link>
                <Link to='mind3'>
                  <div>
                    <img src={Mind3} alt='하얀 언덕'/>
                  </div>
                  <div>
                    <p>하얀 언덕</p>
                    <p>최원호</p>
                  </div>
                </Link>
              </Box>
            </div>
          </Box>
        </div>
    )
}

function ListMD() {
  return (
      <div>
        <div className="listMD-section1-bg">
          <Box className='listMD-section1'>
            <p className="listMD-section1-title">오늘의 책</p>
            <div className="listMD-section1-con">
              <motion.div
                initial={{ opacity: 0, 
                    x: -40
                }}
                whileInView={{ opacity: 1,
                    x: 0,
                    transition: {
                    type: "spring",
                    duration: 2,
                    }
                }}
              >
                <Link to="novel1">
                  <img className="listMD-section1-con-img" src={Today1} alt='해와 달'/>
                  <p>1위</p>
                  <p>해와 달</p>
                </Link>
              </motion.div>
              <div style={{width: '100px'}}/>
              <motion.div
                initial={{ opacity: 0, 
                    x: -40
                }}
                whileInView={{ opacity: 1,
                    x: 0,
                    transition: {
                    type: "spring",
                    duration: 2,
                    delay: 0.25,
                    }
                }}
              >
                <Link to="relation2">
                  <img className="listMD-section1-con-img" src={Today2} alt='돈과 사람'/>
                  <p>2위</p>
                  <p>돈과 사람</p>
                </Link>
              </motion.div>
              <div style={{width: '100px'}}/>
              <motion.div
                initial={{ opacity: 0, 
                    x: -40
                }}
                whileInView={{ opacity: 1,
                    x: 0,
                    transition: {
                    type: "spring",
                    duration: 2,
                    delay: 0.5,
                    }
                }}
              >
                <Link to="novel3">
                  <img className="listMD-section1-con-img" src={Today3} alt='픽셀전쟁'/>
                  <p>3위</p>
                  <p>픽셀전쟁</p>
                </Link>
              </motion.div>
            </div>
          </Box>
        </div>
        <Box className='listMD-section listMD-section2'>
          <p className="listMD-section2-title">장르별 책</p>
          <div className="listMD-section2-con">
            <p>소설</p>
            <Box>
              <Link to='novel1'>
                <div>
                  <img src={Novel1} alt='해와 달'/>
                </div>
                <div>
                  <p>해와 달</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='novel2'>
                <div>
                  <img src={Novel2} alt='무적'/>
                </div>
                <div>
                  <p>무적</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='novel3'>
                <div>
                  <img src={Novel3} alt='픽셀전쟁'/>
                </div>
                <div>
                  <p>픽셀전쟁</p>
                  <p>최원호</p>
                </div>
              </Link>
            </Box>
            <Box>
              <Link to='novel4'>
                <div>
                  <img src={Novel4} alt='그림자'/>
                </div>
                <div>
                  <p>그림자</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='novel5'>
                <div>
                  <img src={Novel5} alt='왕의 전쟁'/>
                </div>
                <div>
                  <p>왕의 전쟁</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='novel6'>
                <div>
                  <img src={Novel6} alt='신발을 부탁해'/>
                </div>
                <div>
                  <p>신발을 부탁해</p>
                  <p>최원호</p>
                </div>
              </Link>
            </Box>
            <Box>
              <Link to='novel7'>
                <div>
                  <img src={Novel7} alt='세계최강'/>
                </div>
                <div>
                  <p>세계최강</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='novel8'>
                <div>
                  <img src={Novel8} alt='워노화신'/>
                </div>
                <div>
                  <p>워노화신</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='novel9'>
                <div>
                  <img src={Novel9} alt='모니터 안의 세상'/>
                </div>
                <div>
                  <p>모니터 안의 세상</p>
                  <p>최원호</p>
                </div>
              </Link>
            </Box>
          </div>
          <div className="listMD-section2-con">
            <p>인간관계</p>
            <Box>
              <Link to='relation1'>
                <div>
                  <img src={Relation1} alt='소셜 다이빙'/>
                </div>
                <div>
                  <p>소셜 다이빙</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='relation2'>
                <div>
                  <img src={Relation2} alt='돈과 사람'/>
                </div>
                <div>
                  <p>돈과 사람</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='relation3'>
                <div>
                  <img src={Relation3} alt='꼰대중독'/>
                </div>
                <div>
                  <p>꼰대중독</p>
                  <p>최원호</p>
                </div>
              </Link>
            </Box>
            <Box>
              <Link to='relation4'>
                <div>
                  <img src={Relation4} alt='그 상사의 사정'/>
                </div>
                <div>
                  <p>그 상사의 사정</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='relation5'>
                <div>
                  <img src={Relation5} alt='요즘 것들을 이해하는 법'/>
                </div>
                <div>
                  <p>요즘 것들을 이해하는 법</p>
                  <p>최원호</p>
                </div>
              </Link>
              <div style={{ width: '33%'}}/>
            </Box>
          </div>
          <div className="listMD-section2-con">
            <p>심리학</p>
            <Box>
              <Link to='mind1'>
                <div>
                  <img src={Mind1} alt='마음의 평화'/>
                </div>
                <div>
                  <p>마음의 평화</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='mind2'>
                <div>
                  <img src={Mind2} alt='원호심리학'/>
                </div>
                <div>
                  <p>원호심리학</p>
                  <p>최원호</p>
                </div>
              </Link>
              <Link to='mind3'>
                <div>
                  <img src={Mind3} alt='하얀 언덕'/>
                </div>
                <div>
                  <p>하얀 언덕</p>
                  <p>최원호</p>
                </div>
              </Link>
            </Box>
          </div>
        </Box>
      </div>
  )
}

function ListSM() {
  return (
      <div>
        <div className="listSM-section1-bg">
          <Box className='listSM-section1'>
            <p className="listSM-section1-title">오늘의 책</p>
            <div className="listSM-section1-con">
              <motion.div
                initial={{ opacity: 0, 
                    x: -40
                }}
                whileInView={{ opacity: 1,
                    x: 0,
                    transition: {
                    type: "spring",
                    duration: 2,
                    }
                }}
              >
                <Link to="novel1">
                  <img className="listSM-section1-con-img" src={Today1} alt='해와 달'/>
                  <p>1위</p>
                  <p>해와 달</p>
                </Link>
              </motion.div>
              <div style={{width: '100px'}}/>
              <motion.div
                initial={{ opacity: 0, 
                    x: -40
                }}
                whileInView={{ opacity: 1,
                    x: 0,
                    transition: {
                    type: "spring",
                    duration: 2,
                    delay: 0.25,
                    }
                }}
              >
                <Link to="relation2">
                  <img className="listSM-section1-con-img" src={Today2} alt='돈과 사람'/>
                  <p>2위</p>
                  <p>돈과 사람</p>
                </Link>
              </motion.div>
              <div style={{width: '100px'}}/>
              <motion.div
                initial={{ opacity: 0, 
                    x: -40
                }}
                whileInView={{ opacity: 1,
                    x: 0,
                    transition: {
                    type: "spring",
                    duration: 2,
                    delay: 0.5,
                    }
                }}
              >
                <Link to="novel3">
                  <img className="listSM-section1-con-img" src={Today3} alt='픽셀전쟁'/>
                  <p>3위</p>
                  <p>픽셀전쟁</p>
                </Link>
              </motion.div>
            </div>
          </Box>
        </div>
        <Box className='listSM-section listSM-section2'>
          <p className="listSM-section2-title">장르별 책</p>
          <div className="listSM-section2-con">
            <p>소설</p>
            <Box>
              <Link to='novel1'>
                <img src={Novel1} alt='해와 달'/>
                <p>해와 달</p>
                <p>최원호</p>
              </Link>
              <Link to='novel2'>
                <img src={Novel2} alt='무적'/>
                <p>무적</p>
                <p>최원호</p>
              </Link>
            </Box>
            <Box>
              <Link to='novel3'>
                <img src={Novel3} alt='픽셀전쟁'/>
                <p>픽셀전쟁</p>
                <p>최원호</p>
              </Link>
              <Link to='novel4'>
                <img src={Novel4} alt='그림자'/>
                <p>그림자</p>
                <p>최원호</p>
              </Link>
            </Box>
            <Box>
              <Link to='novel5'>
                <img src={Novel5} alt='왕의 전쟁'/>
                <p>왕의 전쟁</p>
                <p>최원호</p>
              </Link>
              <Link to='novel6'>
                <img src={Novel6} alt='신발을 부탁해'/>
                <p>신발을 부탁해</p>
                <p>최원호</p>
              </Link>
            </Box>
            <Box>
              <Link to='novel7'>
                <img src={Novel7} alt='세계최강'/>
                <p>세계최강</p>
                <p>최원호</p>
              </Link>
              <Link to='novel8'>
                <img src={Novel8} alt='워노화신'/>
                <p>워노화신</p>
                <p>최원호</p>
              </Link>
            </Box>
            <Box>
              <Link to='novel9'>
                <img src={Novel9}  alt='모니터 안의 세상'/>
                <p>모니터 안의 세상</p>
                <p>최원호</p>
              </Link>
              <div style={{ width:'50%' }}/>
            </Box>
          </div>
          <div className="listSM-section2-con">
            <p>인간관계</p>
            <Box>
              <Link to='relation1'>
                <img src={Relation1} alt='소셜 다이빙'/>
                <p>소셜 다이빙</p>
                <p>최원호</p>
              </Link>
              <Link to='relation2'>
                <img src={Relation2} alt='돈과 사람'/>
                <p>돈과 사람</p>
                <p>최원호</p>
              </Link>
            </Box>
            <Box>
              <Link to='relation3'>
                <img src={Relation3} alt='꼰대중독'/>
                <p>꼰대중독</p>
                <p>최원호</p>
              </Link>
            
              <Link to='relation4'>
                <img src={Relation4} alt='그 상사의 사정'/>
                <p>그 상사의 사정</p>
                <p>최원호</p>
              </Link>
            </Box>
            <Box>
              <Link to='relation5'>
                <img src={Relation5} alt='요즘 것들을 이해하는 법'/>
                <p>요즘 것들을 이해하는 법</p>
                <p>최원호</p>
              </Link>
              <div style={{ width: '50%'}}/>
            </Box>
          </div>
          <div className="listSM-section2-con">
            <p>심리학</p>
            <Box>
              <Link to='mind1'>
                <img src={Mind1} alt='마음의 평화'/>
                <p>마음의 평화</p>
                <p>최원호</p>
              </Link>
              <Link to='mind2'>
                <img src={Mind2} alt='원호심리학'/>
                <p>원호심리학</p>
                <p>최원호</p>
              </Link>
            </Box>
            <Box>
              <Link to='mind3'>
                <img src={Mind3} alt='하얀 언덕'/>
                <p>하얀 언덕</p>
                <p>최원호</p>
              </Link>
              <div style={{ width: '50%' }} />
            </Box>
          </div>
        </Box>
      </div>
  )
}



function ListAll() {
  return (
    <div>
      <Hidden lgDown>
        <TopBar2/>
        <List/>
        <FooterLG/>
      </Hidden>
      <Hidden smDown lgUp>
        <TopBar2/>
        <ListMD/>
        <FooterMD/>
      </Hidden>
      <Hidden smUp>
        <TopBar2SM/>
        <ListSM/>
        <FooterSM/>
        <div style={{height:'80px'}} />
      </Hidden>
    </div>
  );
}

export default ListAll;