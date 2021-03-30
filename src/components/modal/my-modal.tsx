import { h, Component, Prop, Method } from "@stencil/core/internal";

@Component({
    tag: 'pa-modal',
    styleUrl: './my-modal.css',
    shadow: true
  })

export class MyModal {
    @Prop({reflect: true}) heading: string;

    @Prop({reflect: true, mutable: true}) open: boolean;

    @Method()
    async openModal() {
        this.open = true;
    }

    hideModal() {
        this.open = false;
    }

    render() {
        return (
            <div class="modal" onClick={this.hideModal.bind(this)}>
                <section>
                    <h1>{this.heading}</h1>
                    <slot/>
                </section>
            </div>
        )
    }
}