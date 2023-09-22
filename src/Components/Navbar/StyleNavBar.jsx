import styled from "@emotion/styled";

const NavBody = styled.nav`

.navBar {

    background-color: #153440;
    border-right: rgb(227, 227, 227) 2px solid;
    box-shadow: 0 0 4px black;
    
    width: 15vw;
    height: 101vh;
    
    position: fixed;
    top: 0;
    display: none;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    
    
    .navBtns {

        display: flex;
        flex-direction: column;
        margin-top: 10px;
        width: 100%;

        .navItem {

            margin-top: 2px;
            padding: 15px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 600;
            font-size: 1.5vw;
            text-align: center;
            color: rgb(227, 227, 227);
            background-color: transparent;
            outline: none;
            border: none;
            transition: 0.2s;
            user-select: none;

            :hover {

                background-color: rgba(227, 227, 227, 0.612);
                color: #011c27;
                cursor: pointer;
            }
            
        }

    }

    hr {
        margin-top: 10px;
        border: solid 1px rgba(23, 23, 65, 0.321);
    }
    
    .abrev {
        margin-top: 20px;
        width: 100%;
        font-size: 5vw;
        height: fit-content;
        display: flex;
        justify-content: center;
        text-align: center;
        user-select: none;

        a {

            font-family: 'Italiana', serif;
            color: rgb(227, 227, 227);
            padding: 10px;
            width: 100%;

            :hover {
                background-color: rgba(227, 227, 227, 0.612);
                color: #011c27;
                cursor: pointer;
            }
        }
    }

    .contato {
        width: 95%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;

        .contatoItem {
            color: rgb(227, 227, 227);
            display: flex;
            margin-bottom: 15px;

            i {

                margin-right: 10px;
            }

            p {

                font-size: 0.7vw;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
        }
    }
}

    /////////////////////////
    ////////////////////////
    ///////////////////////

.burgerNavOff {


        position: fixed;
        left: 1%;
        top: 1%;
        width: 40px;
        z-index: 1;

        .one,.two,.three {
    
            background-color: #323953;
            box-shadow: #0000007e 0px 0px 3px;
            height: 4px;
            width: 100%;
            margin: 6px auto;
            transition: 0.3s;
        }

        .burgerNavCard {

            display: none;
        }
}

.burgerNavOn {

        position: fixed;
        width: 40px;
        z-index: 999;

        .one,.two,.three {

            position: relative;
            top: 0.5rem;
            left: 0.5rem;
    
            background-color: rgb(227, 227, 227);
            height: 4px;
            width: 100%;
            margin: 6px auto;
            transition: 0.3s;
        }

        .one {
            transform: rotate(45deg) translate(7px, 7px);
        }

        .two {
            opacity: 0;
        }

        .three {
            transform: rotate(-45deg) translate(7px, -8px);
        }

        .burgerNavCard {

            position: absolute;
            
            background-color: #153440;
            width: 100vw;
            height: 100vh;
        }

        .burgerNavItems {

            position: relative;
            top: 7%;
        }
        
        .navBtns {

            display: flex;
            flex-direction: column;
            margin-top: 10px;
            width: 100%;

            .navItem {

                margin-top: 2px;
                padding: 15px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-weight: 600;
                font-size: 5vw;
                text-align: center;
                color: rgb(227, 227, 227);
                background-color: transparent;
                outline: none;
                border: none;
                transition: 0.2s;
                user-select: none;

                    :hover {

                        background-color: rgba(227, 227, 227, 0.612);
                        color: #011c27;
                        cursor: pointer;
                    }
                
            }

        }

        hr {
        margin-top: 10px;
        border: solid 1px rgba(23, 23, 65, 0.321);
        }

        .abrev {

            margin-top: 20px;
            width: 100%;
            font-size: 10vw;
            height: fit-content;
            display: flex;
            justify-content: center;
            text-align: center;
            user-select: none;

            a {

                font-family: 'Italiana', serif;
                color: rgb(227, 227, 227);
                padding: 10px;
                width: 100%;

                    :hover {
                        background-color: rgba(227, 227, 227, 0.612);
                        color: #011c27;
                        cursor: pointer;
                    }
            }
        }

        .contato {

            width: 95%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            position: relative;
            top: 3vh;

            .contatoItem {

                color: rgb(227, 227, 227);
                display: flex;
                margin-bottom: 5px;


                i {

                    margin-right: 10px;
                }

                p {

                    font-size: 2vw;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                }
            }
        }
}

    @media (min-width: 960px) {

        .navBar {

            display: flex;
        }

        .burgerNav {

            display: none;
        }
        
    }
   
    `

export default NavBody
