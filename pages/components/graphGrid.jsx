import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import $ from "jquery";
import styles from '../_styles/grid.module.css';
export default class GraphGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            disabled: false,
            gridItems: undefined,
        };
    }

    componentDidMount = () => {
        
        const gridItems = document.getElementsByClassName(styles.gridItems);
        this.setState({ gridItems: gridItems });
        //window.onload = requestAnimationFrame(async () => {
        //    await this.smiley();
        //});
        this.createDiv();
    }

    createDiv = () => {
        let array = [];
        for (let i = 0; i < 2100; i++) {
            array.push(i);
        }
        this.setState({ array: array });
    }
    //test
    smiley = () => {
        let disabled = false;
        const spd = 50;
        let animations = [518, 519, 520, 521, 592, 663, 734, 805, 875, 945, 1014, 1083, 1152, 1221, 1220, 1219, 1218, 1147, 1076, 1005, 934, 864, 794, 725, 656, 587, 797, 802, 939, 940, 1078, 1149, 1150, 1081];
        let i = 0;
        let anim = 0;
        animations.map(idx => {
            anim = i * spd;
            setTimeout(() => {
                this.state.gridItems[idx].classList.add(styles.active);
            }, anim);
            i++;
        });
        anim += 500;
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    getSmiley = async () => {
        let disabled = true;
        this.setState({ disabled: disabled });
        return this.smiley();
    }

    heart = () => {
        let disabled = false;
        const spd = 50;
        let animations = [1784, 1713, 1715, 1642, 1646, 1571, 1577, 1500, 1508, 1429, 1439, 1358, 1370, 1287, 1301, 1216, 1232, 1145, 1163, 1074, 1094, 1003, 1025, 932, 956, 861, 887, 790, 818, 719, 649, 749, 679, 580, 608, 511, 537, 442, 466, 373, 395, 304, 324, 235, 253, 166, 182, 167, 181, 168, 180, 169, 179, 170, 178, 171, 177, 242, 246, 313, 315, 384];
        let i = 0;
        let anim = 0;
        animations.map(idx => {
            anim = i * spd;
            setTimeout(() => {
                this.state.gridItems[idx].classList.add(styles.active);
            }, anim);
            i++;
        });
        anim += 500;
        setTimeout(function () {
            this.setState({ disabled: disabled });
        }.bind(this), anim);

    }

    getHeart = async () => {
        let disabled = true;
        this.setState({ disabled: disabled });
        return this.heart();
    }
    //to this
    handleClick = idx => {
        requestAnimationFrame(() => {
            this.state.gridItems[idx].classList.add(styles.active);
        });
    }

    handleMouseMove = () => {
        requestAnimationFrame(() => {
            $(this.state.gridItems).on("mousedown mouseover", function (e) {
                if (e.buttons === 1) {
                    $(this).addClass(styles.active);
                }
            })
            
        });
    }

    handleRemoveMouseMove = () => {
        requestAnimationFrame(() => {
            $(this.state.gridItems).mouseup(
                function () {
                    $(this).removeClass(styles.active);
                }
            )
        });
    }

    resetPath = () => {
        this.state.arrayIdx.map(idx => {
            requestAnimationFrame(() => {
                this.state.gridItems[idx].classList.remove(styles.active);
            });
        });
    }

    resetPathN = async () => {
        for (let i = 0; i < this.state.gridItems.length; i++) {
            this.state.gridItems[i].classList.remove(styles.active);
        }
    }

    render = () => {
        const { array } = this.state;
        return (
            <React.Fragment>
                <Container className="p-0" fluid={true}>
                    <Navbar className={"d-flex border-bottom"} bg="dark" variant="dark" id="navIdN" expand="lg">
                        <Nav.Link className="nav-link nl">Graph-Grids</Nav.Link>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Nav.Link href="/" className="nav-link"><i id="home" className="mr-3 fa fa-home" /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>


                <button onClick={() => this.resetPathN()} disabled={this.state.disabled}>resetPath</button><br />
                <button onClick={async () => this.resetPathN().then(this.getSmiley()).catch(err => console.log)} disabled={this.state.disabled} >Smiley</button><br />
                <button onClick={async () => this.resetPathN().then(this.getHeart()).catch(err => console.log)} disabled={this.state.disabled} >Heart</button>
                <div className={styles.gridContainer}>
                    {array.map((value, idx) => (
                        <div className={styles.gridItems} id={idx} key={idx}
                            onClick={() => this.handleClick(idx)}
                            onMouseEnter={() => this.handleMouseMove()}
                            onMouseLeave={() => this.handleRemoveMouseMove()}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            </React.Fragment>
            );
    }
}
