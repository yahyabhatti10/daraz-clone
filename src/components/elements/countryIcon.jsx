function CountryIcon({ countryName, flagImage }) {
    
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        margin: '0 10px 5px 0'
    };

    const flagStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        marginRight: '8px',
        objectFit: 'cover'
    };

    const textStyle = {
        fontSize: '14px',
        color: '#666'
    };
    return (
        <div style={containerStyle}>
            <img 
                src={flagImage} 
                alt={`${countryName} flag`} 
                style={flagStyle}
            />
            <span style={textStyle}>{countryName}</span>
        </div>
    );
}

export default CountryIcon;