import React from "react";
import './ProgressBar.css';

    const ProgressBar = (props) => {
        const { bgcolor, bgbar, completed, name} = props;

        const nameStyle = {
        color: 'white',
        width: '7%',
        fontSize: 20,
        }

        const mainContainerStyles = {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 5,
        paddingBottom: 5
        }

        const containerStyles = {
        height: 20,
        width: '82%',
        backgroundColor: bgbar,
        borderRadius: 0,
        marginLeft: 9,
        }

        const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
        }

        const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
        }

        return (
            <div style={mainContainerStyles}>
                <div style={nameStyle}>{`${name}`}</div>
                <div style={containerStyles}>
                    <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                    </div>
                </div>
            </div>

        );
    };
    
    export default ProgressBar;
