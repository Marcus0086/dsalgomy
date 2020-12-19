import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import $ from "jquery";
import styles from '../_styles/grid.module.css';

export default class GraphGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowArray: [],
            colArray: [],
            disabled: false,
            idxE: [],
            activeElements: undefined,
            gridItems: undefined,
            tdClass: undefined,
            imgClass: undefined,
            rowP: 0,
            colP: 0,
        };
    }

    componentDidMount = () => {
        this.createGrid(); 
        const activeClass = document.getElementsByClassName(styles.active);
        const imgClass = document.getElementsByClassName(styles.imgClass);
        const tdClass = styles.gridItems;
        const gridItems = document.getElementsByClassName(styles.gridItems);
        this.setState({ activeClass: activeClass });
        this.setState({ gridItems: gridItems });
        this.setState({ imgClass: imgClass });
        this.setState({ tdClass: tdClass });

    }

    createGrid = () => {
        const idxE = [17, 6];
        let rowArray = [];
        for (let i = 0; i <= 30; i++) {
            rowArray.push(i);
        }
        let colArray = [];
        for (let i = 0; i < 70; i++) {
            colArray.push(i);
        }
        this.setState({ rowArray: rowArray });
        this.setState({ colArray: colArray });
        this.setState({ idxE: idxE });

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

    getSmiley = () => {
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

    getHeart = () => {
        let disabled = true;
        this.setState({ disabled: disabled });
        return this.heart();
    }
    //to this
    handleClick = () => {
        $(this.state.gridItems).click(function () {
            $(this).addClass(styles.active);
        });
    }

    handleMouseMove = () => {
        $(this.state.gridItems).on("mousedown mouseover", function (e) {
            if (e.buttons === 1) {
                e.preventDefault();
                $(this).addClass(styles.active);
            }
        });
    }

    handleRemoveMouseMove = () => {
        $(this.state.gridItems).mouseup(
            function () {
                $(this).removeClass(styles.active);
            }
        )
    }

    resetPathN = async () => {
        for (let i = 0; i < this.state.gridItems.length; i++) {
            this.state.gridItems[i].classList.remove(styles.active);
        }
    }

    render = () => {
        const { imgClass } = this.state;
        const { rowArray } = this.state;
        const { colArray } = this.state;
        let idP = 0;
        let i = 0;
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
                {/*<button onClick={async () => this.resetPathN().then(this.getSmiley()).catch(err => console.log)} disabled={this.state.disabled} >Smiley</button><br />
                <button onClick={async () => this.resetPathN().then(this.getHeart()).catch(err => console.log)} disabled={this.state.disabled} >Heart</button>*/}
                <div className={styles.gridContainer}>
                    <table>
                        <tbody>
                            {rowArray.map((valr, idxr) => (
                                idP++,
                                <tr key={idP} >
                                    <td className={styles.lineNumber} key={"."+valr * idxr}>{idxr}</td>
                                    {colArray.map((val, idx) => (
                                        ((idxr === 0)) ? <td className={styles.lineNumber} key={".%"+idx+val+"#"}>{++i}</td> :
                                        (((idxr === this.state.idxE[0]) && (idx === this.state.idxE[1])) ? (
                                            <td className={styles.imgClass} draggable
                                                key={idx + "-" + idxr} id={"img" + idxr + "-" + idx}
                                                onDragStart={async () => {
                                                    await imgClass[0].classList.add(styles.dragged)
                                                }}
                                                onDragEnd={async () => {
                                                    await imgClass[0].classList.remove(styles.dragged)
                                                }}
                                            / >
                                        ) : (
                                                <td className={this.state.tdClass} draggable key={idx + "-" + idxr} id={idxr + "-" + idx}
                                                    onDragOver={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    onClick={() => {
                                                        this.handleClick();
                                                    }}
                                                    onMouseEnter={() => this.handleMouseMove()}
                                                    onMouseLeave={() => this.handleRemoveMouseMove()}
                                                    >
                                                </td>
                                            ))
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.card}>
                    <p>Change start Node location:</p>
                    <label htmlFor="rowCoordinate">Enter row:</label>
                    <input type="text" id="row" name="rCoord" /><br />
                    <label htmlFor="colCoordinate">Enter col:</label>
                    <input type="text" id="col" name="cCoord" />
                </div>
            </React.Fragment>
            );
    }
}
