CREATE TABLE Students
    (sID INTEGER NOT NULL,
    sFName CHAR (30),
    sMName CHAR (30),
    sLName CHAR (30),
    sUMail CHAR (30),
    PRIMARY KEY (sID))


CREATE TABLE Alternate_Emails
    (sID INTEGER NOT NULL,
    sAltEmail CHAR(30),
    FOREIGN KEY (sID) REFERENCES Students ON DELETE CASCADE)


CREATE TABLE Sections
    (sectID INTEGER NOT NULL,
    cID INTEGER NOT NULL,
    iID INTEGER NOT NULL,
    PRIMARY KEY (sectID, cID, iID),
    FOREIGN KEY (cID) REFERENCES Courses,
    FOREIGN KEY (iID) REFERENCES Instructors
    )


CREATE TABLE Enroll
    (sID INTEGER NOT NULL,
    sectID INTEGER NOT NULL,
    grade CHAR(20),
    PRIMARY KEY (sID, sectID),
    FOREIGN KEY (sID) REFERENCES Students ON DELETE CASCADE)


CREATE TABLE Courses
    (cID INTEGER NOT NULL,
    cName CHAR (50),
    cCr CHAR (10),
    PRIMARY KEY (cID))


CREATE TABLE Teach
    (iID INTEGER NOT NULL,
    sectID INTEGER NOT NULL,
    PRIMARY KEY (iID, sectID),
    FOREIGN KEY (iID) REFERENCES Instructors,
    FOREIGN KEY (sectID) REFERENCES Sections)


CREATE TABLE Instructors
    (iID INTEGER NOT NULL,
    iTitle CHAR(4),
    iFName CHAR(30),
    iMl CHAR (30),
    iLName CHAR (30),
    iRank CHAR (20),
    iEmail CHAR (30),
    iBldg CHAR (30),
    iRm CHAR (5),
    PRIMARY KEY (iID))
