<script>
                                document.addEventListener("DOMContentLoaded", function() {
                                    document.getElementById("logoutBtn").addEventListener("click", function(event) {
                                        event.preventDefault(); // Prevent default link behavior
                                
                                        if (confirm("Are you sure you want to log out?")) {
                                            // Clear session or local storage (if used for authentication)
                                            sessionStorage.clear();
                                            localStorage.clear();
                                
                                            // Redirect to login page
                                            window.location.href = "login.html";
                                        }
                                    })};
                                
                                </script>