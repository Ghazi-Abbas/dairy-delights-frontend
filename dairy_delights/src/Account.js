import { useContext, useEffect, useState } from "react";
import { DataContext } from "./App";
import axios from "axios";

export default function Account() {
    const { stdId, setStdId } = useContext(DataContext);
    let url = `http://localhost:3004/users/${stdId}`;
    const [accData, setaccData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const[role,setRole]=useState();

    useEffect(() => {
        axios.get(url)
            .then(resp => {
                setaccData(resp.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
                alert(err);
            });
    }, []);

    if (loading) {
        return (
            <div style={styles.loadingContainer}>
                <div style={styles.spinner}></div>
                <p style={styles.loadingText}>Loading account information...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={styles.errorContainer}>
                <div style={styles.errorIcon}>⚠️</div>
                <h3 style={styles.errorTitle}>Error Loading Data</h3>
                <p style={styles.errorMessage}>{error}</p>
                <button 
                    style={styles.retryButton}
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>Account Information</h1>
                <div style={styles.profileBadge}>User ID: {stdId}</div>
            </div>
            
            <div style={styles.profileCard}>
                <div style={styles.imageContainer}>
                {console.log(accData.image)}
                    <img 
                        src={accData.image} 
                        alt="Profile" 
                        style={styles.profileImage}
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150/cccccc/666666?text=No+Image';
                        }}
                    />
                </div>
                
                <div style={styles.detailsContainer}>
                    <div style={styles.detailGroup}>
                        <label style={styles.label}>Full Name</label>
                        <div style={styles.value}>{accData.fullName || "Not provided"}</div>
                    </div>
                    
                    <div style={styles.detailGroup}>
                        <label style={styles.label}>Email</label>
                        <div style={styles.value}>{accData.email || "Not provided"}</div>
                    </div>
                    
                    <div style={styles.detailGroup}>
                        <label style={styles.label}>Mobile Number</label>
                        <div style={styles.value}>{accData.mobileN || "Not provided"}</div>
                    </div>
                    
                    <div style={styles.detailGroup}>
                        <label style={styles.label}>Address</label>
                        <div style={styles.value}>{accData.address || "Not provided"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        paddingBottom: "15px",
        borderBottom: "2px solid #e9ecef"
    },
    title: {
        color: "#2c3e50",
        fontSize: "2rem",
        fontWeight: "600",
        margin: 0
    },
    profileBadge: {
        backgroundColor: "#3498db",
        color: "white",
        padding: "8px 16px",
        borderRadius: "20px",
        fontSize: "0.9rem",
        fontWeight: "500"
    },
    profileCard: {
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "30px",
        display: "flex",
        gap: "30px",
        alignItems: "flex-start"
    },
    imageContainer: {
        flex: "0 0 auto"
    },
    profileImage: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "4px solid #e9ecef",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    },
    detailsContainer: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    },
    detailGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    },
    label: {
        fontSize: "0.9rem",
        color: "#6c757d",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.5px"
    },
    value: {
        fontSize: "1.1rem",
        color: "#2c3e50",
        fontWeight: "500",
        padding: "10px 0",
        borderBottom: "1px solid #f1f3f4"
    },
    loadingContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        gap: "20px"
    },
    spinner: {
        width: "40px",
        height: "40px",
        border: "4px solid #f3f3f3",
        borderTop: "4px solid #3498db",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
    },
    loadingText: {
        color: "#6c757d",
        fontSize: "1.1rem"
    },
    errorContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        gap: "15px",
        textAlign: "center"
    },
    errorIcon: {
        fontSize: "3rem"
    },
    errorTitle: {
        color: "#e74c3c",
        margin: 0
    },
    errorMessage: {
        color: "#6c757d",
        margin: 0
    },
    retryButton: {
        backgroundColor: "#3498db",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
        marginTop: "10px"
    }
};

// Add CSS for spinner animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`, styleSheet.cssRules.length);