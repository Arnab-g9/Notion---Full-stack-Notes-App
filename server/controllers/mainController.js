/**
 * GET
 * Homepage
 */
exports.homepage = async (req, res)=>{
    const locals = {
        title: "NodeJs Notes",
        description: "Free Node Js Notes app",
    };

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

/**
 * GET
 * Homepage
 */
exports.about = async (req, res)=>{
    const locals = {
        title: "About - NodeJs Notes",
        description: "Free Node Js Notes app",
    };

    res.render('about', locals);
}