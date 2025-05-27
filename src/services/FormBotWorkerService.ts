import { IWorkerService } from '../interfaces/IWorkerService';
import puppeteer from 'puppeteer';
import { AMQPMessage } from '../models/AMQPMessage';

export class FormBotWorkerService implements IWorkerService {
    // constructor (
    //     private readonly proxyService: ProxyService
    //     private readonly formService: FormService,
    //     private readonly subscriberService: SubscriberService
    // ) {
    // }

    public async handle ({ settings, worker }: AMQPMessage): Promise<AMQPMessage> {
        const { subscriberId, formId } = settings;
        // const proxy = await this.proxyService.findOne();
        // const form = await this.formService.findOne({
        //     where: {
        //         id: formId
        //     }
        // });
        // const subscriber = await this.subscriberService.findOne({
        //     where: {
        //         id: subscriberId
        //     }
        // });
        console.log('FormBotWorkerService handle start');
        console.log('subscriberId: ' + subscriberId);
        console.log('formId: ' + formId);

        // const url = "https://www.santanderconsumer.pl/ldp/kredyt-gotowkowy-mistrzowski/001,4,0.html?utm_source=comperia&utm_medium=link-tekstowy&utm_term=dcm-h&utm_campaign=cl-mistrzowski-karencja-r-s-9-90-21jun21&utm_content=lato&epi=147397581482&dclid=CMXIvuXOhoUDFcSXgwcd6GkCIg";
        const url = "http://localhost";

        const browser = await puppeteer.launch({
            headless: true,
            args: [
                // http://19.151.94.248:88
                // `--proxy-server=protocol://username:password@host:port`
                // `--proxy-server=${proxy}`
            ]
        });
        const page = await browser.newPage();
        await page.goto(url);
        await page.setViewport({width: 1080, height: 1024});
        // await page.type('.devsite-search-field', 'automate beyond recorder');
        await page.click("#submit");
        const formInfoSelector = ".formInfo";
        const formInfoSelectorObj = await page.waitForSelector(formInfoSelector);
        console.log('FormBot finish: ');
        console.log(await formInfoSelectorObj?.evaluate(el => el.textContent));
        return {
            settings,
            worker
        };
    }
}
