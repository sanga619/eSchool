import React from 'react'
import '../css/style.css';
import Footer2 from './Footer2';
function Footer() {
    return (
        <div class ="container-fluid" style ={{backgroundColor:"#F8F8F8",padding:"40px"}}>
            <div class ="row">
                <div class ="col-md-3 col-sm-12">
                <ul style ={{listStyle:"none"}}><li><b>Top Online Courses</b></li></ul>
                    <ul style ={{listStyle:"none"}}>
                        <li>basic of programing</li>
                        <li>Introduction to java</li>
                        <li>Algorithms, Part 1</li>
                        <li>Algorithms, Part 2</li>
                        <li>Machine Learning</li>
                    </ul>
                </div>
                <div class ="col-md-3 col-sm-12">
                <ul style ={{listStyle:"none"}}><li><b>Top Online Specializations</b></li></ul>
                <ul style={{listStyle:"none"}}>
                <li>basic of programing</li>
                        <li>Introduction to java</li>
                        <li>Algorithms, Part 1</li>
                        <li>Algorithms, Part 2</li>
                        <li>Machine Learning</li>
                </ul>
                </div>
                <div class ="col-md-3 col-sm-12">
                <ul style ={{listStyle:"none"}}><li><b>Online Certificates</b></li></ul>
                <ul style={{listStyle:"none"}}>
                <li>basic of programing</li>
                        <li>Introduction to java</li>
                        <li>Algorithms, Part 1</li>
                        <li>Algorithms, Part 2</li>
                        <li>Machine Learning</li>

                </ul>
                </div>
                <div class ="col-md-3 col-sm-12">
                <ul style ={{listStyle:"none"}}><li><b>Online Degree Program</b></li></ul>
                <ul style={{listStyle:"none"}}>
                <li>basic of programing</li>
                        <li>Introduction to java</li>
                        <li>Algorithms, Part 1</li>
                        <li>Algorithms, Part 2</li>
                        <li>Machine Learning</li>
                </ul>
                </div>
            </div>
            <hr/>
            <Footer2/>
        </div>
    )
}

export default Footer
