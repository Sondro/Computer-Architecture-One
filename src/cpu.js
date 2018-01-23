/**
 * LS-8 v2.0 emulator skeleton code
 */

const fs = require('fs');

// Instructions

const HLT  = 0b00011011; // HaLT CPU
// !!! IMPLEMENT ME

const LDI  = 0b00000100; //  LoaD Immediate?
const MUL  = 0b00000101; // MULtiply
const PRN  = 0b00000110; // PRint Number
const PSH  = 0b00000010; // P[U]SH mem/rom stack

/**
 * Class for simulating a simple Computer (CPU & memory)
 */
class CPU {

    /**
     * Initialize the CPU
     */
    constructor(ram) {
        this.ram = ram;

        this.reg = new Array(8).fill(0); // General-purpose registers
        
        // Special-purpose registers
        this.reg.PC = 0; // Program Counter
        this.reg.IR = 0; // Instruction Register

        this.setupBranchTable();
        
        this.reg = this.ram.read(this.reg.PC + 1);
        this.val = this.ram.read(this.reg.PC + 2);
        this.handler = this.branchTable[this.reg.IR];
    }
	
	/**
	 * Sets up the branch table
	 */
	setupBranchTable() {
		let bt = {};

        bt[HLT] = this.HLT;
        // !!! IMPLEMENT ME
        bt[LDI] = this.LDI;
        bt[MUL] = this.MUL;
        bt[PRN] = this.PRN;
        bt[PSH] = this.PSH;

		this.branchTable = bt;
	}

    /**
     * Store value in memory address, useful for program loading
     */
    poke(address, value) {
        this.ram.write(address, value);
    }

    /**
     * Starts the clock ticking on the CPU
     */
    startClock() {
        const _this = this;

        this.clock = setInterval(() => {
            _this.tick();
        }, 1);
    }

    /**
     * Stops the clock
     */
    stopClock() {
        clearInterval(this.clock);
    }

    /**
     * ALU functionality
     * 
     * op can be: ADD SUB MUL DIV INC DEC CMP
     */
    alu(op, regA, regB) {
        let valA, valB;

        switch (op) {
            case 'MUL':
                // !!! IMPLEMENT ME
                this.reg[regA] = (valA * valB) & 255;
                break;
        }
    }

    /**
     * Advances the CPU one cycle
     */

  tick() {
   // !!! IMPLEMENT ME
   // Load the instruction register from the current PC
    
   // Debugging output    //console.log(`${this.reg.PC}: ${this.reg.IR.toString(2)}`);

   // Based on the value in the Instruction Register, jump to the
   // appropriate hander in the branchTable     
   // Check that the handler is defined, halt if not (invalid instruction    
   this.handler = this.branchTable[this.reg.IR];

   if (typeof this.handler === undefined) {
       console.log(`ERROR No handler, check instruction: ${this.reg.IR.toString()}`);
       this.stopClock();
       return;
   }

   // We need to use call() so we can set the "this" value inside
   // the handler (otherwise it will be undefined in the handler)
   
    handler.call(this);
  }

    // INSTRUCTION HANDLER CODE:


    /**
     * HLT
     */
    HLT() {
      // !!! IMPLEMENT ME
      this.stopClock();
    }

    /**
     * LDI R,I
     */
    LDI() {
      // !!! IMPLEMENT ME
      this.reg = this.ram.read(this.reg.PC + 1);
      this.val = this.ram.read(this.reg.PC + 2);

      this.reg[reg] = val;
     
      //Next:
      this.alu('ADD', PC, null, 3);
    }

    /**
     * MUL R,R
     */
    MUL() {
    // !!! IMPLEMENT ME
     this.reg = this.ram.read(this.reg.PC + 1);
     this.val = this.ram.read(this.reg.PC + 2);

     //Next:
     this.alu('ADD', PC, null, 3);
    }

    /**
     * PRN R
     */
    PRN() {
      // !!! IMPLEMENT ME
      this.reg = this.ram.read(this.reg.PC + 1);
      
      fs.writeSync(process.stdout.fd, this.reg[reg]);

      //Next:
      this.alu('ADD', PC, null, 2);
    }

    /**
     * PSH P[U]SH HD
     */
    PSH() {
        // !!! IMPLEMENT ME
        this.reg[7]--; //decR7;

        this.ram.write(this.reg[7], this.reg[regA]);
        
        //fs.writeSync(process.stdout.fd, this.reg[reg]);
  
        //Next:
        this.alu('ADD', PC, null, 2);
      }
}

module.exports = CPU;
