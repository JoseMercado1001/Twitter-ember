import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'

export default class FeedComponent extends Component {
	@tracked tweets = this.args.tweets || [];
}
