import { db } from '../config/db.js';
import { Router } from "express";
var router = Router();
import { doc, getDocs, getDoc, addDoc, collection } from "firebase/firestore";

router.get('/:id', async (req, res) => {
    getDoc(doc(db, "post", req.params.id)).then(function (docu) {
        const id = docu.id;
        var type = null;
        var s = [];
        if (req.session.uid != undefined) {
            getDoc(doc(db, "User", req.session.uid, "vote", req.params.id)).then(function (user) {
                const u = user.data();
                if (u != undefined) {
                    type = u.type;
                } else {
                    type = "na";
                }
            });
        }
        getDocs(collection(db, "post", req.params.id, "response")).then(function (docs) {
            const post = [];
            var cont;
            if (req.session.uid != undefined) {
                getDocs(collection(db, "User", req.session.uid, "vote", req.params.id, "reponse")).then(function (z) {
                    z.forEach((document) => {
                        s.push([document.data().type, document.id]);
                    });
                    docs.forEach((document) => {
                        cont = [document.data(), document.id, "na"];
                        for (var i = 0; i < s.length; i++) {
                            if (s[i][1] == document.id) {
                                cont = [document.data(), document.id, s[i][0]];
                            }
                        }
                        post.push(cont);
                    });
                    post.sort(function (a, b) {
                        return b[0].score - a[0].score;
                    })
                    res.render("../views/post.ejs", { post: docu.data(), account: req.session.log, response: post, id: id, type: type });        
                });
            } else {
                docs.forEach((document) => {
                    cont = [document.data(), document.id];
                    post.push(cont);
                });
                post.sort(function (a, b) {
                    return b[0].score - a[0].score;
                })
                res.render("../views/post.ejs", { post: docu.data(), account: req.session.log, response: post, id: id, type: type });    
            }               
       });
    });
})

router.post('/:id', async (req, res) => {
    addDoc(collection(db, "post", req.params.id, "response"), {
        contenu: req.body.contenu,
        score: 0,
        name: req.session.name,
    });
    getDoc(doc(db, "post", req.params.id)).then(function (docu) {
        const id = docu.id;
        var type = null;
        var s = [];
        if (req.session.uid != undefined) {
            getDoc(doc(db, "User", req.session.uid, "vote", req.params.id)).then(function (user) {
                const u = user.data();
                if (u != undefined) {
                    type = u.type;
                } else {
                    type = "na";
                }
            });
        }
        getDocs(collection(db, "post", req.params.id, "response")).then(function (docs) {
            const post = [];
            var cont;
            if (req.session.uid != undefined) {
                getDocs(collection(db, "User", req.session.uid, "vote", req.params.id, "reponse")).then(function (z) {
                    z.forEach((document) => {
                        s.push([document.data().type, document.id]);
                    });
                    docs.forEach((document) => {
                        cont = [document.data(), document.id, "na"];
                        for (var i = 0; i < s.length; i++) {
                            if (s[i][1] == document.id) {
                                cont = [document.data(), document.id, s[i][0]];
                            }
                        }
                        post.push(cont);
                    });
                    post.sort(function (a, b) {
                        return b[0].score - a[0].score;
                    })
                    res.render("../views/post.ejs", { post: docu.data(), account: req.session.log, response: post, id: id, type: type });        
                });
            } else {
                docs.forEach((document) => {
                    cont = [document.data(), document.id];
                    post.push(cont);
                });
                post.sort(function (a, b) {
                    return b[0].score - a[0].score;
                })
                res.render("../views/post.ejs", { post: docu.data(), account: req.session.log, response: post, id: id, type: type });    
            }               
       });
    });
})

export default router;