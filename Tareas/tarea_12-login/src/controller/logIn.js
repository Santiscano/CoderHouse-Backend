const users = [
    {
        username: 'Santiago',
        password: '123456789',
        admin: true
    }
]

export const logIn = (req, res) => {

    const { username, password } = req.body;

    const index = users.findIndex((aUser) => aUser.username === username && aUser.password === password);

    if (index < 0)
        res.status(401).json({ msg: 'User no register' });
    else {
        const user = users[index];

        req.session.info = {
            loggedIn: true,
            accountant: 1,
            username: user.username,
            admin: user.admin,
        };
        res.json({ msg: `!Welcome ${user.username}¡` })
    }
}

export const verifyLogIn = (req, res) => {

    if (req.session.info && req.session.info.loggedIn) {
        req.session.info.accountant++;
        res.json({
            msg: `${req.session.info.username} you´re have visit website ${req.session.info.accountant} times`,
        });
    } else {
        res.status(401).json({ msg: 'User no login' });
    }
}

export const logout = (req, res) => {

    let username = req.session.info.username;

    req.session.destroy((err) => {

        if (!err) res.send(`Good bye ${username}`);
        else res.send({ status: 'Error Logout', body: err });

    });
}