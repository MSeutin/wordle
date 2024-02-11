// Default Flag Lines
export const defaultBg = {
  backgroundImage: `
    linear-gradient(135deg, 
      transparent 33%, 
      rgba(169, 169, 169, 0.5) 33%, 
      rgba(169, 169, 169, 0.5) 33.5%, 
      transparent 33.5%, 
      transparent 66%, 
      rgba(169, 169, 169, 0.5) 66%, 
      rgba(169, 169, 169, 0.5) 66.5%, 
      transparent 66.5%
    )`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100vh",
  width: "100vw",
  bgcolor: "whitesmoke",
};

// French Flag Background
export const frenchFlagBg = {
  backgroundImage: `
     linear-gradient(135deg, 
      #4682b4 0%, /* Start Blue */
      #4682b4 33.33%, /* End Blue */
      #ffffff 33.33%, /* Start White */
      #ffffff 66.66%, /* End White */
      #ff6347 66.66%, /* Start Red */
      #ff6347 100% /* End Red */
    )`,
  backgroundSize: "cover",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
};

// Italian Flag Background
export const italianFlagBg = {
  backgroundImage: `
     linear-gradient(135deg, 
    #008C45 33.33%, 
    #ffffff 33.33%, #ffffff 66.66%, 
    #CD212A 66.66%)`,
  backgroundSize: "cover",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
};
