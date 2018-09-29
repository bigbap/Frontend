using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Frontend.Controllers
{
    public class TemplatesController : Controller
    {
        // GET: Templates
        public ActionResult Templates()
        {
            return PartialView();
        }
    }
}