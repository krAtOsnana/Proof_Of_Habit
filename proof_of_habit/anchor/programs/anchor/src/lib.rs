use anchor_lang::prelude::*;

declare_id!("86Fu7nVx3f675sSY883Jsa1wjAga3p7Y9x9aR51QwBC");

#[program]
pub mod anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
