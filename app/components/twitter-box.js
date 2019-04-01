import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TwitterBoxComponent extends Component {
	@tracked text;

	@action
	handleChange(text){

		this.text = text;
	}

	@action
	handleSubmit(){
		let newText = this.text;
		if (this.args.onSubmit){
		this.args.onSubmit(newText);
	} else {
		alert('handleSubmit');
	}
	}
}
