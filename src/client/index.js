import { validURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/messages.scss'

// export as module
export{
	validURL,
	handleSubmit
}


 app.post("/save", function (req,res){

	console.log(req.body);
	const parseUrl = req.body.url;
	console.log(parseUrl);

	if(aylienAPI){

		aylienAPI.sentiment({

			url:parseUrl

		},

		(err , resp) => {

			if(err == null){

				console.log(resp);

				res.json({
					

					message: resp.polarity,
					message1 : resp.polarity_confidence

				});


			}else{

				const failedText = "could not classify his news articles";

				res.json({

					message: failedText
				});
			}
		}
		);
	}
});
