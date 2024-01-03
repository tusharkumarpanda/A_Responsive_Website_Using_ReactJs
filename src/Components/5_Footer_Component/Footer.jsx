function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="w-100 bg-light text-center">
                <p>© {year} Tushar Kumar Panda. All Rights Reserved | Terms and Condition applied</p>
            </footer>
        </>
    )
}

export default Footer
