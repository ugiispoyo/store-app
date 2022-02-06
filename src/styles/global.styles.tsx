import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    wrap: {
        width: '100%',
        maxWidth: '560px',
        display: 'block',
        margin: 'auto',
    },
    layout: {
        margin: 'auto 15px',
        top: '50px',
        padding: '15px 0px',
        position: 'relative'
    },
    navbar: {
        margin: '0px -15px',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '0px 0px 4px 4px',
        boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.14)',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        position: 'fixed',
        lineHeight: 1.43,
        display: 'flex', 
        alignItems: 'center', 
        textAlign: 'center',
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '560px',
        top: 0,
        letterSpacing: '0.01071em',
        backgroundColor: 'rgb(229, 246, 253)',
        padding: '15px 10px',
        color: 'rgb(1, 67, 97)',
        justifyContent: 'space-between',
        '& a': {
            color: '#1a76d2',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            '& svg': {
                marginRight: '5px'
            }
        },
        '& p:last-child a': {
            justifyContent: 'flex-end',
            position: 'relative'
        },
    }
});

export default useStyles;